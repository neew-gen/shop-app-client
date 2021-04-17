import { GetterTree, MutationTree } from 'vuex'

import { Mutations } from '@/types/store/mutations'
import { Actions } from '@/types/store/actions'
import { State } from '@/types/store/state'
import { useFetch } from '@/api/fetch-api/useFetch'
import { ProductCartItem } from '@/types/product'
import { watch } from 'vue'
import {
  deleteCacheSelected,
  updateCacheAllChecked,
  updateCartItemCache,
} from '@/helpers/cacheFunctions'

/*
   ---------------------- Actions -------------------------------
 */
export type ActionsPayload = {
  fetchCartList: [void, Promise<void>]
  updateCartItem: [
    { id: string; propName: string; propValue: string | number },
    Promise<void>,
  ]
  updateAllChecked: [boolean, Promise<void>]
  deleteSelected: [void, Promise<void>]
}

export const actions: Actions<ActionsPayload> = {
  async fetchCartList({ commit }) {
    const { data, loading } = useFetch<ProductCartItem[]>('CO', '/cart-cache')
    const unwatch = watch(loading, () => {
      if (data.value) commit('fetchCartList', data.value)
      unwatch()
    })
  },
  async updateCartItem({ commit }, { id, propName, propValue }) {
    await updateCartItemCache(id, propName, propValue)
    commit('updateCartItem', { id, propName, propValue })
  },
  async updateAllChecked({ commit }, value) {
    await updateCacheAllChecked(value)
    commit('updateAllChecked', value)
  },
  async deleteSelected({ commit }) {
    await deleteCacheSelected()
    commit('deleteSelected', (null as unknown) as void)
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
