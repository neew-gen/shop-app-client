// A realizing of "Stale-While-Revalidate" strategy
import { Ref } from 'vue'

import { Fetch } from '@/services/FetchService/Fetch'
import { ApolloRequestor, AxiosRequestor } from '@/types/fetch'

export class SWRStrategy<Data> extends Fetch<Data> {
  constructor(
    key: string,
    requestor: ApolloRequestor | AxiosRequestor,
    private data: Ref<Data | undefined>,
    private loading: Ref<boolean>,
    private extractor?: string,
  ) {
    super(key, requestor)
  }
  public async useSWR(): Promise<void> {
    const exist = await this.cacheExist()
    if (!exist) {
      const cachedData = await this.fetchFromCache()
      this.data.value = cachedData
      this.loading.value = false
      const fetchedData = await this.fetchFromNetwork(this.extractor)
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
    const fetchedData = await this.fetchFromNetwork(this.extractor)
    this.data.value = fetchedData
    await this.updateCache(fetchedData)
  }
}
