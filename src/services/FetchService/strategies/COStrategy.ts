// A realizing of "Cache-Only" strategy
import { Ref } from 'vue'

import { Fetch } from '@/services/FetchService/Fetch'

export class COStrategy<Data> extends Fetch<Data> {
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
