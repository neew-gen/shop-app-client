// // A realizing of "Network-Only" strategy
// import { Ref } from 'vue'
//
// import { Fetch } from '@/api/fetch/Fetch'
// import { ApolloRequestor, AxiosRequestor } from '@/types/fetch'
//
// export class NOStrategy<Data> extends Fetch<Data> {
//   constructor(
//     requestor: ApolloRequestor | AxiosRequestor,
//     private data: Ref<Data | undefined>,
//     private loading: Ref<boolean>,
//     private extractor?: string,
//   ) {
//     super(requestor)
//   }
//   public async useNF(): Promise<void> {
//     try {
//       const fetchedData = await this.fetchFromNetwork(this.extractor)
//       if (!fetchedData) return
//       this.data.value = fetchedData
//       this.loading.value = false
//
//       // async update cache
//       this.fetchFromCache().then((res) => {
//         if (!this.cacheIsOutdate(res, fetchedData)) return
//         this.updateCache(fetchedData)
//       })
//     } catch (e) {
//       // if we can't get a data from a network, we try to get it from a cache
//       if (!e) return
//
//       const exist = await this.cacheExist()
//       if (!exist) return
//
//       this.data.value = await this.fetchFromCache()
//       this.loading.value = false
//     }
//   }
// }
