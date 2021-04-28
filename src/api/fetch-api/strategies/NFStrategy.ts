// A realizing of "Network-First" strategy
import { Ref } from 'vue'

import { FetchApi } from '@/api/fetch-api/FetchApi'
import { ApolloFetcher, AxiosFetcher } from '@/types/fetch'

export class NFStrategy<Data> extends FetchApi<Data> {
  constructor(
    key: string,
    fetcher: ApolloFetcher | AxiosFetcher,
    private data: Ref<Data | undefined>,
    private loading: Ref<boolean>,
  ) {
    super(key, fetcher)
  }
  public async useNF(): Promise<void> {
    const fetchedData = await this.fetchFromNetwork().catch(async () => {
      const exist = await this.cacheExist()

      if (!exist) return
      this.data.value = await this.fetchFromCache()
      this.loading.value = false
    })

    if (!fetchedData) return
    this.data.value = fetchedData
    this.loading.value = false
    // const cachedData = await this.fetchFromCache()
    //
    // if (!this.cacheIsOutdate(cachedData, fetchedData)) return
    // await this.updateCache(fetchedData)
    // TODO need to check all these
    // async cache update
    this.fetchFromCache().then((res) => {
      if (!this.cacheIsOutdate(res, fetchedData)) return
      this.updateCache(fetchedData)
    })

    // if (this.cacheIsOutdate(cachedData, fetchedData))
    //   const exist = await this.cacheExist()
    //   if (!exist) {
    //     const cachedData = await this.fetchFromCache()
    //     this.data.value = cachedData
    //     this.loading.value = false
    //     const fetchedData = await this.fetchFromNetwork()
    //     if (fetchedData) {
    //       if (this.cacheIsOutdate(cachedData, fetchedData)) {
    //         this.data.value = fetchedData
    //         this.loading.value = false
    //         await this.updateCache(fetchedData)
    //       }
    //     }
    //     return
    //   }
    //   this.data.value = await this.fetchFromCache()
    //   this.loading.value = false
    //   const fetchedData = await this.fetchFromNetwork()
    //   this.data.value = fetchedData
    //   await this.updateCache(fetchedData)
  }
}
