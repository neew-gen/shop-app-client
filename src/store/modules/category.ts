import { GetterTree, MutationTree } from 'vuex'

import { Mutations } from '@/types/store/mutations'
import { Actions } from '@/types/store/actions'
import { State } from '@/types/store/state'
import { EditListType } from '@/types'
import { GraphqlApi } from '@/api/GraphqlApi'
import { GET_CATEGORIES_EDITLIST } from '@/api/queries/categoryQueries'
import { CategoryCreateInput, CategoryUpdateInput } from '@/types/category'

/*
   ---------------------- Actions -------------------------------
 */
export type ActionsPayload = {
  fetchCategoryEditList: [void, void]
  createCategory: [CategoryCreateInput, void]
  updateCategory: [{ id: string; updateData: CategoryUpdateInput }, void]
  deleteCategory: [string, void]
}

export const actions: Actions<ActionsPayload> = {
  async fetchCategoryEditList({ commit, state }): Promise<void> {
    if (state.category.editList.length === 0) {
      const payload = await GraphqlApi.fetchAll<EditListType>(
        GET_CATEGORIES_EDITLIST
      )
      commit('fetchCategoryEditList', payload)
    }
  },
  async createCategory({ commit, state }, createData): Promise<void> {
    const id = await GraphqlApi.createCategory(createData)
    if (state.category.editList.length !== 0) {
      commit('createCategory', { id, createData })
    }
  },
  async updateCategory({ commit, state }, { id, updateData }): Promise<void> {
    await GraphqlApi.updateCategory(id, updateData)
    if (state.category.editList.length !== 0) {
      commit('updateCategory', { id, updateData })
    }
  },
  async deleteCategory({ commit, state }, id): Promise<void> {
    await GraphqlApi.deleteCategory(id)
    if (state.category.editList.length !== 0) {
      commit('deleteCategory', id)
    }
  }
}
/*
   ---------------------- Mutations -----------------------------
 */
export type MutationPayload = {
  fetchCategoryEditList: EditListType[]
  createCategory: { id: string; createData: CategoryCreateInput }
  updateCategory: { id: string; updateData: any }
  deleteCategory: string
}

export const mutations: MutationTree<State> & Mutations<MutationPayload> = {
  fetchCategoryEditList({ category }, fetchedData) {
    category.editList = fetchedData
  },
  createCategory({ category }, { id, createData }) {
    createData.id = id
    category.editList.push(createData)
  },
  updateCategory({ category }, { id, updateData }) {
    const [updatingCategory] = category.editList.filter(
      (p: EditListType) => p.id === id
    )
    for (const prop in updateData) {
      updatingCategory[prop] = updateData[prop]
    }
  },
  deleteCategory({ category }, id) {
    category.editList = category.editList.filter(
      (p: EditListType) => p.id !== id
    )
  }
}

/*
   ---------------------- Getters -------------------------------
 */
export type Getters = {
  getCategoryEditList(state: State): EditListType[]
}

export const getters: GetterTree<State, State> & Getters = {
  getCategoryEditList: ({ category }) => {
    return category.editList
  }
}
