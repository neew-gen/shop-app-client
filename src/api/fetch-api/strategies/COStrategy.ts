// A realizing of "Cache-Only" strategy
import { Ref } from 'vue'

import { FetchApi } from '@/api/fetch-api/FetchApi'

export class COStrategy<Data> extends FetchApi<Data> {
  constructor(
    key: string,
    private data: Ref<Data | undefined>,
    private loading: Ref<boolean>,
  ) {
    super(key)
  }
  public async useCO(): Promise<void> {
    const exist = await this.cacheExist()
    if (!exist) {
      this.loading.value = false
    }
    this.data.value = await this.fetchFromCache()
    this.loading.value = false
  }
}
