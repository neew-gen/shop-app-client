// A realizing of "Stale-While-Revalidate" strategy
import { FetchApi } from '@/api/fetch-api/FetchApi'
import { Ref } from 'vue'
import { Fetcher } from '@/types/fetch'
import { DocumentNode } from '@apollo/client'

export class SWRStrategy<Data> extends FetchApi<Data> {
  constructor(
    key: string,
    fetcher: Fetcher,
    fetcherArgs: [query: DocumentNode, variable?: { [key: string]: string; }],
    private data: Ref<Data | undefined>,
    private loading: Ref<boolean>
  ) {
    super(key, fetcher, fetcherArgs)
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
    const fetchedData = await this.fetchFromNetwork()
    this.data.value = fetchedData
    this.loading.value = false
    await this.updateCache(fetchedData)
  }
}
