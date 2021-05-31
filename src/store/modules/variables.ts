import { GetterTree, MutationTree } from 'vuex'

import { Actions } from '@/types/store/actions'
import { Mutations } from '@/types/store/mutations'
import { State } from '@/types/store/state'

/*
   ---------------------- Actions -------------------------------
 */
export type ActionsPayload = {
  updateCategoryDropdown: [string | undefined, void]
}

export const actions: Actions<ActionsPayload> = {
  updateCategoryDropdown({ commit }, payload) {
    commit('updateCategoryDropdown', payload)
  },
}
/*
   ---------------------- Mutations -----------------------------
 */
export type MutationPayload = {
  updateCategoryDropdown: string | undefined
}

export const mutations: MutationTree<State> & Mutations<MutationPayload> = {
  updateCategoryDropdown({ variables }, payload) {
    variables.categoryDropdown = payload
  },
}
/*
   ---------------------- Getters -------------------------------
 */
export type Getters = {
  getCategoryDropdown(state: State): string | undefined
}

export const getters: GetterTree<State, State> & Getters = {
  getCategoryDropdown: ({ variables }) => {
    return variables.categoryDropdown
  },
}
