import { DocumentNode } from '@apollo/client'
import { isEqual } from 'lodash'

import { axiosExtractor } from '@/api/fetch-api/extractors/axiosExtractror'
import { defaultExtractor } from '@/api/fetch-api/extractors/defaultExtractor'
import { ApolloFetcher, AxiosFetcher, DataExtractor } from '@/types/fetch'

export class FetchApi<Data> {
  constructor(
    protected key: string,
    protected fetcher?: ApolloFetcher | AxiosFetcher,
  ) {}

  protected async cacheExist(): Promise<boolean> {
    return await window.caches.has(this.key)
  }
  protected async fetchFromCache(): Promise<Data> {
    const cache = await window.caches.match(this.key)
    return cache?.json()
  }
  protected async fetchFromNetwork(
    extractor?: string,
  ): Promise<Data | undefined> {
    if (this.fetcher) {
      const res = await this.fetcher()
      if (res) {
        switch (extractor) {
          case 'axios': {
            return axiosExtractor<Data>(res)
          }
          default: {
            return defaultExtractor<Data>(res)
          }
        }
        // if (extractor) {
        //   return extractor()(res)
        // }
        // return defaultExtractor<Data>(res)
      }
    }
  }
  protected cacheIsOutdate(cachedData: Data, fetchedData: Data): boolean {
    return !isEqual(cachedData, fetchedData)
  }
  protected async updateCache(fetchedData?: Data): Promise<void> {
    const cache = await window.caches.open(this.key)
    const toJson = JSON.stringify(fetchedData)
    await cache.put(this.key, new Response(toJson))
  }
}
