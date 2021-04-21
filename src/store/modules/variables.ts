import { GetterTree, MutationTree } from 'vuex'

import { Actions } from '@/types/store/actions'
import { Mutations } from '@/types/store/mutations'
import { State } from '@/types/store/state'

/*
   ---------------------- Actions -------------------------------
 */
export type ActionsPayload = {
  updateFullSizeSearch: [boolean, void]
  updateCategoryDropdown: [string | undefined, void]
}

export const actions: Actions<ActionsPayload> = {
  updateFullSizeSearch({ commit }, payload) {
    commit('updateFullSizeSearch', payload)
  },
  updateCategoryDropdown({ commit }, payload) {
    commit('updateCategoryDropdown', payload)
  },
}
/*
   ---------------------- Mutations -----------------------------
 */
export type MutationPayload = {
  updateFullSizeSearch: boolean
  updateCategoryDropdown: string | undefined
}

export const mutations: MutationTree<State> & Mutations<MutationPayload> = {
  updateFullSizeSearch({ variables }, payload) {
    variables.fullSizeSearch = payload
  },
  updateCategoryDropdown({ variables }, payload) {
    variables.categoryDropdown = payload
  },
}
/*
   ---------------------- Getters -------------------------------
 */
export type Getters = {
  getFullSizeSearch(state: State): boolean
  getCategoryDropdown(state: State): string | undefined
}

export const getters: GetterTree<State, State> & Getters = {
  getFullSizeSearch: ({ variables }) => {
    return variables.fullSizeSearch
  },
  getCategoryDropdown: ({ variables }) => {
    return variables.categoryDropdown
  },
}
