// import { Ref, ref } from 'vue'
//
// import { COStrategy } from '@/api/fetch/strategies/COStrategy'
// import { NFStrategy } from '@/api/fetch/strategies/NFStrategy'
// import { SWRStrategy } from '@/api/fetch/strategies/SWRStrategy'
// import { ApolloRequestor, AxiosRequestor } from '@/types/fetch'
//
// export function useFetch<Data>(
//   strategy: string,
//   key: string,
//   requestor?: ApolloRequestor | AxiosRequestor,
//   extractor?: string,
// ): { data: Ref<Data | undefined>; loading: Ref<boolean> } {
//   const data = ref(undefined)
//   const loading = ref(true)
//   switch (strategy) {
//     case 'SWR': {
//       if (requestor) {
//         const swr = new SWRStrategy<Data>(
//           key,
//           requestor,
//           data,
//           loading,
//           extractor,
//         )
//         swr.useSWR()
//         break
//       }
//       break
//     }
//     case 'CO': {
//       const co = new COStrategy<Data>(key, data, loading)
//       co.useCO()
//       break
//     }
//     case 'NF': {
//       if (fetcher) {
//         const nf = new NFStrategy<Data>(key, fetcher, data, loading)
//         nf.useNF()
//       }
//       break
//     }
//   }
//   return { data, loading }
// }
//
// export async function awaitUseFetch<Data>(
//   strategy: string,
//   key: string,
//   fetcher?: ApolloFetcher | AxiosFetcher,
//   extractor?: string | 'axios',
// ): Promise<Data | undefined> {
//   const data = ref(undefined)
//   const loading = ref(true)
//   switch (strategy) {
//     case 'SWR': {
//       if (fetcher) {
//         const swr = new SWRStrategy<Data>(
//           key,
//           fetcher,
//           data,
//           loading,
//           extractor,
//         )
//         await swr.useSWR()
//       }
//       break
//     }
//     case 'CO': {
//       const co = new COStrategy<Data>(key, data, loading)
//       await co.useCO()
//       break
//     }
//     case 'NF': {
//       if (fetcher) {
//         const nf = new NFStrategy<Data>(key, fetcher, data, loading)
//         await nf.useNF()
//       }
//       break
//     }
//   }
//   return data.value
// }
//
