import { GetterTree, MutationTree } from 'vuex'

import { Mutations } from '@/types/store/mutations'
import { Actions } from '@/types/store/actions'
import { State } from '@/types/store/state'
import { EditListType } from '@/types'
import { GraphqlApi } from '@/api/GraphqlApi'
import { GET_PRODUCTS_EDITLIST } from '@/api/queries/productQueries'
import { ProductCreateInput, ProductUpdateInput } from '@/types/product'
import _ from 'lodash'

/*
   ---------------------- Actions -------------------------------
 */
export type ActionsPayload = {
  fetchProductsEditList: [void, void]
  createProduct: [ProductCreateInput, void]
  updateProduct: [{ id: string; updateData: ProductUpdateInput }, void]
  deleteProduct: [string, void]
}

export const actions: Actions<ActionsPayload> = {
  async fetchProductsEditList({ commit, state }): Promise<void> {
    if (state.product.editList.length === 0) {
      const payload = await GraphqlApi.fetchAll<EditListType>(
        GET_PRODUCTS_EDITLIST
      )
      commit('fetchProductsEditList', payload)
    }
  },
  async createProduct({ commit, state }, createData): Promise<void> {
    const id = await GraphqlApi.createProduct(createData)
    if (state.product.editList.length !== 0) {
      commit('createProduct', { id, createData })
    }
  },
  async updateProduct({ commit, state }, { id, updateData }): Promise<void> {
    await GraphqlApi.updateProduct(id, updateData)
    if (state.product.editList.length !== 0) {
      commit('updateProduct', { id, updateData })
    }
  },
  async deleteProduct({ commit, state }, id): Promise<void> {
    await GraphqlApi.deleteProduct(id)
    if (state.product.editList.length !== 0) {
      commit('deleteProduct', id)
    }
  }
}
/*
   ---------------------- Mutations -----------------------------
 */
export type MutationPayload = {
  fetchProductsEditList: EditListType[]
  createProduct: { id: string; createData: ProductCreateInput }
  updateProduct: { id: string; updateData: any }
  deleteProduct: string
}

export const mutations: MutationTree<State> & Mutations<MutationPayload> = {
  fetchProductsEditList({ product }, fetchedData) {
    product.editList = fetchedData
  },
  createProduct({ product }, { id, createData }) {
    createData.id = id
    product.editList.push(createData)
  },
  updateProduct({ product }, { id, updateData }) {
    const [updatingProduct] = product.editList.filter(
      (p: EditListType) => p.id === id
    )
    for (const prop in updateData) {
      updatingProduct[prop] = updateData[prop]
    }
  },
  deleteProduct({ product }, id) {
    product.editList = product.editList.filter((p: EditListType) => p.id !== id)
  }
}

/*
   ---------------------- Getters -------------------------------
 */
export type Getters = {
  getProductsEditList(state: State): EditListType[]
}

export const getters: GetterTree<State, State> & Getters = {
  getProductsEditList: ({ product }) => {
    return product.editList
  }
}
