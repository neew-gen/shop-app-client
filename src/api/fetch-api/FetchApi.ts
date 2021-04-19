import { DocumentNode } from '@apollo/client'
import _ from 'lodash'

import { dataExtractor } from '@/api/fetch-api/dataExtractor'
import { Fetcher } from '@/types/fetch'

export class FetchApi<Data> {
  constructor(protected key: string, protected fetcher?: Fetcher) {}

  protected async cacheExist(): Promise<boolean> {
    return await caches.has(this.key)
  }
  protected async fetchFromCache(): Promise<Data> {
    const cache = await caches.match(this.key)
    return cache?.json()
  }
  protected async fetchFromNetwork(): Promise<Data | undefined> {
    if (this.fetcher) {
      const res = await this.fetcher()
      if (res) {
        return dataExtractor<Data>(res)
      }
    }
  }
  protected cacheIsOutdate(cachedData: Data, fetchedData: Data): boolean {
    return !_.isEqual(cachedData, fetchedData)
  }
  protected async updateCache(fetchedData?: Data): Promise<void> {
    const cache = await caches.open(this.key)
    const toJson = JSON.stringify(fetchedData)
    await cache.put(this.key, new Response(toJson))
  }
}
