import { DocumentNode } from '@apollo/client'
import { Ref, ref } from 'vue'

import { COStrategy } from '@/api/fetch-api/strategies/COStrategy'
import { SWRStrategy } from '@/api/fetch-api/strategies/SWRStrategy'
import { Fetcher } from '@/types/fetch'

export function useFetch<Data>(
  strategy: string,
  key: string,
  fetcher?: Fetcher,
): { data: Ref<Data | undefined>; loading: Ref<boolean> } {
  const data = ref(undefined)
  const loading = ref(true)
  switch (strategy) {
    case 'SWR': {
      if (fetcher) {
        const swr = new SWRStrategy<Data>(key, fetcher, data, loading)
        swr.useSWR()
      }
      break
    }
    case 'CO': {
      const co = new COStrategy<Data>(key, data, loading)
      co.useCO()
      break
    }
  }
  // ;(async (): Promise<void> => {
  //   const exist = await cacheExist(key)
  //   if (exist) {
  //     const cachedData = await fetchFromCache(key)
  //     data.value = cachedData
  //     loading.value = false
  //     const fetchedData = await fetchFromNetwork<Data>(
  //       key,
  //       fetcher,
  //       fetcherQuery
  //     )
  //     if (fetchedData) {
  //       if (cacheIsOutdate(cachedData, fetchedData)) {
  //         data.value = fetchedData
  //         loading.value = false
  //         await updateCache<Data>(key, fetchedData)
  //       }
  //     }
  //     return
  //   }
  //   const fetchedData = await fetchFromNetwork<Data>(key, fetcher, fetcherQuery)
  //   data.value = fetchedData
  //   loading.value = false
  //   await updateCache<Data>(key, fetchedData)
  // })()
  return { data, loading }
}

// function dataExtractor(key: string, data: any): any {
//   if (data) {
//     switch (key) {
//       case 'categoriesList': {
//         return data.data.categoriesPublic
//       }
//       //   case 'B': {
//       //     console.log('Good')
//       //     break
//       //   }
//     }
//   }
// }

// async function cacheExist(key: string): Promise<any> {
//   return await caches.has(key)
// }
//
// async function fetchFromNetwork<Data>(
//   key: string,
//   fetcher: Fetcher<Data>,
//   fetcherQuery: DocumentNode
// ): Promise<any> {
//   const res = await fetcher(fetcherQuery)
//   if (res) {
//     return dataExtractor(key, res)
//   }
//   // return fetcher(fetcherQuery)
// }
// async function updateCache<Data>(key: string, fetchedData: any): Promise<void> {
//   const cache = await caches.open(key)
//   const toJson = JSON.stringify(fetchedData)
//   await cache.put(key, new Response(toJson))
// }
//
// async function fetchFromCache(key: string): Promise<any> {
//   const cache = await caches.match(key)
//   const fromJson = await cache!.json()
//   return fromJson
// }
//
// function cacheIsOutdate(cachedData: any, fetchedData: any): boolean {
//   return !_.isEqual(cachedData, fetchedData)
// }
