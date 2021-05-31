import { Ref, ref } from 'vue'

import { COStrategy } from '@/services/FetchService/strategies/COStrategy'
import { NFStrategy } from '@/services/FetchService/strategies/NFStrategy'
import { SWRStrategy } from '@/services/FetchService/strategies/SWRStrategy'
import { ApolloRequestor, AxiosRequestor } from '@/types/fetch'

export function reactiveFetcher<Data>(
  strategy: 'SWR' | 'CO' | 'NF',
  key: string,
  requestor?: ApolloRequestor | AxiosRequestor,
  extractor?: 'axios',
): { data: Ref<Data | undefined>; loading: Ref<boolean> } {
  const data = ref(undefined)
  const loading = ref(true)
  switch (strategy) {
    case 'SWR': {
      if (requestor) {
        const swr = new SWRStrategy<Data>(
          key,
          requestor,
          data,
          loading,
          extractor,
        )
        swr.useSWR()
        break
      }
      break
    }
    case 'CO': {
      const co = new COStrategy<Data>(key, data, loading)
      co.useCO()
      break
    }
    case 'NF': {
      if (requestor) {
        const nf = new NFStrategy<Data>(key, requestor, data, loading, extractor)
        nf.useNF()
      }
      break
    }
  }
  return { data, loading }
}
