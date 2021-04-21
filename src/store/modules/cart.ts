import { watch } from 'vue'
import { GetterTree, MutationTree } from 'vuex'

import { awaitUseFetch, useFetch } from '@/api/fetch-api/useFetch'
import {
  deleteCacheSelected,
  updateCacheAllChecked,
  updateCartItemCache,
} from '@/helpers/cacheFunctions'
import { ProductCartItem } from '@/types/product'
import { Actions } from '@/types/store/actions'
import { Mutations } from '@/types/store/mutations'
import { State } from '@/types/store/state'

/*
   ---------------------- Actions -------------------------------
 */
export type ActionsPayload = {
  fetchCartList: [void, Promise<void>]
  updateCartItem: [
    { id: string; propName: string; propValue: string | number },
    void,
  ]
  updateAllChecked: [boolean, void]
  deleteSelected: [void, void]
}

export const actions: Actions<ActionsPayload> = {
  async fetchCartList({ commit }) {
    const res = await awaitUseFetch<ProductCartItem[]>('CO', '/cart-cache')
    if (res) commit('fetchCartList', res)
  },
  updateCartItem({ commit }, { id, propName, propValue }) {
    commit('updateCartItem', { id, propName, propValue })
    updateCartItemCache(id, propName, propValue)
  },
  updateAllChecked({ commit }, value) {
    commit('updateAllChecked', value)
    updateCacheAllChecked(value)
  },
  deleteSelected({ commit }) {
    commit('deleteSelected', (null as unknown) as void)
    deleteCacheSelected()
  },
}
/*
   ---------------------- Mutations -----------------------------
 */
export type MutationPayload = {
  fetchCartList: ProductCartItem[]
  updateCartItem: { id: string; propName: string; propValue: string | number }
  updateAllChecked: boolean
  deleteSelected: void
}

export const mutations: MutationTree<State> & Mutations<MutationPayload> = {
  fetchCartList({ cart }, data) {
    cart.cartList = data
  },
  updateCartItem({ cart }, { id, propName, propValue }) {
    const itemForUpdate = cart.cartList.filter(
      (i: ProductCartItem) => i.id === id,
    )[0]
    itemForUpdate[propName] = propValue
  },
  updateAllChecked({ cart }, value) {
    for (const item of cart.cartList) {
      item.checked = value
    }
  },
  deleteSelected({ cart }) {
    cart.cartList = cart.cartList.filter((i: ProductCartItem) => !i.checked)
  },
}
/*
   ---------------------- Getters -------------------------------
 */
export type Getters = {
  getCartList(state: State): ProductCartItem[]
  getTotal(state: State): number
}

export const getters: GetterTree<State, State> & Getters = {
  getCartList: ({ cart }) => {
    return cart.cartList
  },
  getTotal: ({ cart }) => {
    let sum = 0
    for (const item of cart.cartList) {
      if (item.checked) {
        sum += item.price * item.value
      }
    }
    return sum
  },
}
