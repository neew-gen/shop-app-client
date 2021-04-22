// A realizing of "Stale-While-Revalidate" strategy
import { Ref } from 'vue'

import { FetchApi } from '@/api/fetch-api/FetchApi'
import { Fetcher } from '@/types/fetch'

export class SWRStrategy<Data> extends FetchApi<Data> {
  constructor(
    key: string,
    fetcher: Fetcher,
    private data: Ref<Data | undefined>,
    private loading: Ref<boolean>,
  ) {
    super(key, fetcher)
  }
  public async useSWR(): Promise<void> {
    const exist = await this.cacheExist()
    if (!exist) {
      const cachedData = await this.fetchFromCache()
      this.data.value = cachedData
      this.loading.value = false
      const fetchedData = await this.fetchFromNetwork()
      if (fetchedData) {
        if (this.cacheIsOutdate(cachedData, fetchedData)) {
          this.data.value = fetchedData
          this.loading.value = false
          await this.updateCache(fetchedData)
        }
      }
      return
    }
    this.data.value = await this.fetchFromCache()
    this.loading.value = false
    const fetchedData = await this.fetchFromNetwork()
    this.data.value = fetchedData
    await this.updateCache(fetchedData)
  }
}
