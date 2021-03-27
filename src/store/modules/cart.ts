// import { GetterTree, MutationTree, ActionContext, CommitOptions } from 'vuex'
//
// import { initialState } from '../initialState'
// import { CartItemType } from '@/types'
// // import { ICategoriesItem, IProductItem } from '@/types'
//
// /*
//    ---------------------- Mutations this is your code----------------------------
//  */
//
// export type MutationPayload = {
//   addToCart: CartItemType
// }
//
// // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// // @ts-ignore
// export const mutations: MutationTree<State> & Mutations = {
//   addToCart({ cart }, cartItem: CartItemType) {
//     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//     // @ts-ignore
//     cart.push(cartItem)
//   }
// }
//
// /*
//    ---------------------- Getters -------------------------------
//  */
//
// export type Getters = {
//   cartItemsGet(state: State): CartItemType[]
// }
//
// export const getters: GetterTree<State, State> & Getters = {
//   cartItemsGet: ({ cart }) => {
//     return cart
//   },
// }
//
// /*
//    ---------------------- Actions -------------------------------
//  */
//
// export type ActionsPayload = {
//   addToCart: [payload: CartItemType, returnVal: void];
// };
//
// export const actions: Actions = {
//   addToCart({ commit }, payload) {
//     commit("addToCart", payload);
//   },
// };
//
// /*
//    ---------------------- Actions no change code -----------------------------
//  */
//
// type Actions = {
//   [Property in keyof ActionsPayload]: (
//     augContext: AugmentedActionContext,
//     payload: ActionsPayload[Property][0]
//   ) => ActionsPayload[Property][1];
// };
//
// type AugmentedActionContext = {
//   commit<K extends keyof MutationPayload>(
//     key: K,
//     payload: MutationPayload[K],
//     options?: CommitOptions
//   ): void;
// } & Omit<ActionContext<State, State>, "commit">;
//
// /*
//    ---------------------- Mutations - no change code ------------------------
//  */
//
// type Mutations = {
//   [Property in keyof MutationPayload]: (
//     state: State,
//     payload: MutationPayload[Property]
//   ) => void
// }
//
// /*
//    ---------------------- Getters - no change code -------------------------------
//  */
// type State = typeof initialState
