import { ref } from 'vue'

import { COStrategy } from '@/services/FetchService/strategies/COStrategy'
import { NFStrategy } from '@/services/FetchService/strategies/NFStrategy'
import { ApolloRequestor, AxiosRequestor } from '@/types/fetch'

export async function awaitFetcher<Data>(
  strategy: 'CO' | 'NF',
  key: string,
  requestor?: ApolloRequestor | AxiosRequestor,
  extractor?: 'axios',
): Promise<Data | undefined> {
  const data = ref(undefined)
  const loading = ref(true)
  switch (strategy) {
    case 'CO': {
      const co = new COStrategy<Data>(key, data, loading)
      await co.useCO()
      break
    }
    case 'NF': {
      if (requestor) {
        const nf = new NFStrategy<Data>(
          key,
          requestor,
          data,
          loading,
          extractor,
        )
        await nf.useNF()
      }
      break
    }
  }
  return data.value
}
