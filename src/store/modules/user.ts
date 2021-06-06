import { GetterTree, MutationTree } from 'vuex'

import { awaitFetcher } from '@/services/FetchService/FetchService'
import { getUser } from '@/services/JwtService/requests'
import { Actions } from '@/types/store/actions'
import { Mutations } from '@/types/store/mutations'
import { State } from '@/types/store/state'
import { UserData } from '@/types/user'

/*
   ---------------------- Actions -------------------------------
 */
export type ActionsPayload = {
  fetchUserData: [void, Promise<void>]
  // updateCartItem: [
  //   { id: string; propName: string; propValue: string | number },
  //   void,
  // ]
  // updateAllChecked: [boolean, void]
  // deleteSelected: [void, void]
}

export const actions: Actions<ActionsPayload> = {
  async fetchUserData({ commit }) {
    const res = await awaitFetcher<UserData>(
      'NF',
      '/user-data',
      () => getUser(),
      'axios',
    )
    if (res) commit('fetchUserData', res)
  },
  // updateCartItem({ commit }, { id, propName, propValue }) {
  //   commit('updateCartItem', { id, propName, propValue })
  //   updateCartItemCache(id, propName, propValue)
  // },
  // updateAllChecked({ commit }, value) {
  //   commit('updateAllChecked', value)
  //   updateCacheAllChecked(value)
  // },
  // deleteSelected({ commit }) {
  //   commit('deleteSelected', (null as unknown) as void)
  //   deleteCacheSelected()
  // },
}
/*
   ---------------------- Mutations -----------------------------
 */
export type MutationPayload = {
  fetchUserData: UserData
  // updateCartItem: { id: string; propName: string; propValue: string | number }
  // updateAllChecked: boolean
  // deleteSelected: void
}

export const mutations: MutationTree<State> & Mutations<MutationPayload> = {
  fetchUserData({ user }, data) {
    user.userData = data
  },
  // updateCartItem({ cart }, { id, propName, propValue }) {
  //   const itemForUpdate = cart.cartList.filter(
  //     (i: ProductCartItem) => i.id === id,
  //   )[0]
  //   itemForUpdate[propName] = propValue
  // },
  // updateAllChecked({ cart }, value) {
  //   for (const item of cart.cartList) {
  //     item.checked = value
  //   }
  // },
  // deleteSelected({ cart }) {
  //   cart.cartList = cart.cartList.filter((i: ProductCartItem) => !i.checked)
  // },
}
/*
   ---------------------- Getters -------------------------------
 */
export type Getters = {
  getUserName(state: State): string
  // getTotal(state: State): number
}

export const getters: GetterTree<State, State> & Getters = {
  getUserName: ({ user }) => {
    return user.userData.name
  },
  // getTotal: ({ cart }) => {
  //   let sum = 0
  //   for (const item of cart.cartList) {
  //     if (item.checked) {
  //       sum += item.price * item.value
  //     }
  //   }
  //   return sum
  // },
}
