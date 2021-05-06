// import { GetterTree, MutationTree } from 'vuex'
//
// import { Actions } from '@/types/store/actions'
// import { Mutations } from '@/types/store/mutations'
// import { State } from '@/types/store/state'
//
// /*
//    ---------------------- Actions -------------------------------
//  */
// export type ActionsPayload = {
//   updateProductCategoryId: [string, void]
//   updateProductCount: [number, void]
//   updateProductShow: [boolean, void]
// }
//
// export const actions: Actions<ActionsPayload> = {
//   updateProductCategoryId({ commit }, newCategoryId) {
//     commit('updateProductCategoryId', newCategoryId)
//   },
//   updateProductCount({ commit }, newCount) {
//     commit('updateProductCount', newCount)
//   },
//   updateProductShow({ commit }, newShow) {
//     commit('updateProductShow', newShow)
//   },
// }
// /*
//    ---------------------- Mutations -----------------------------
//  */
// export type MutationPayload = {
//   updateProductCategoryId: string
//   updateProductCount: number
//   updateProductShow: boolean
// }
//
// export const mutations: MutationTree<State> & Mutations<MutationPayload> = {
//   updateProductCategoryId({ inputs }, newCategoryId) {
//     inputs.productInput.categoryId = newCategoryId
//   },
//   updateProductCount({ inputs }, newCount) {
//     inputs.productInput.count = newCount
//   },
//   updateProductShow({ inputs }, newShow) {
//     inputs.productInput.show = newShow
//   },
// }
// /*
//    ---------------------- Getters -------------------------------
//  */
// export type Getters = {
//   getProductCount(state: State): number
//   getProductShow(state: State): boolean
// }
//
// export const getters: GetterTree<State, State> & Getters = {
//   getProductCount: ({ inputs }) => {
//     return inputs.productInput.count
//   },
//   getProductShow: ({ inputs }) => {
//     return inputs.productInput.show
//   },
// }
