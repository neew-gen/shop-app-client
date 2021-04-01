import { GetterTree, MutationTree } from 'vuex'

import { Mutations } from '@/types/store/mutations'
import { Actions } from '@/types/store/actions'
import { State } from '@/types/store/state'
import { EditListType } from '@/types'
import { GraphqlApi } from '@/api/GraphqlApi'
import {
  GET_PRODUCTS_EDITLIST_BY_CATEGORY_ID,
  GET_PRODUCTS_EDITLIST
} from '@/api/queries/productQueries'
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
  filterProductsEditList: [string, void]
  clearProductsEditList: [void, void]
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
  },
  filterProductsEditList({ commit, state }, categoryId): void {
    commit('filterProductsEditList', categoryId)
  },
  clearProductsEditList({ commit }): void {
    commit('clearProductsEditList', (null as unknown) as void)
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
  filterProductsEditList: string
  clearProductsEditList: void
}

export const mutations: MutationTree<State> & Mutations<MutationPayload> = {
  fetchProductsEditList({ product }, fetchedData) {
    product.editList = fetchedData
    // create initialState for filtering
    product.initialEditList = _.cloneDeep(fetchedData)
  },
  createProduct({ product }, { id, createData }) {
    createData.id = id
    product.editList.push(createData)
    // initialState
    product.initialEditList.push(createData)
  },
  updateProduct({ product }, { id, updateData }) {
    // TODO need to type this!
    const updateFunction = (list: any): void => {
      const [updatingProduct] = list.filter((p: EditListType) => p.id === id)
      for (const prop in updateData) {
        updatingProduct[prop] = updateData[prop]
      }
    }
    updateFunction(product.editList)
    // initialState
    updateFunction(product.initialEditList)
  },
  deleteProduct({ product }, id) {
    product.editList = product.editList.filter((p: EditListType) => p.id !== id)
    // initialState
    product.initialEditList = product.initialEditList.filter(
      (p: EditListType) => p.id !== id
    )
  },
  filterProductsEditList({ product }, categoryId) {
    console.log(product.initialEditList)
    product.editList = _.cloneDeep(product.initialEditList)
    product.editList = product.editList.filter(
      (p: EditListType) => p.categoryId === categoryId
    )
  },
  clearProductsEditList({ product }) {
    product.editList = _.cloneDeep(product.initialEditList)
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
