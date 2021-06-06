import { createLogger, createStore } from 'vuex'

// product input start
import {
  CreateProductInputActions,
  createProductInputActions,
} from '@/store/modules/createProductInput/createProductInputActions'
import {
  CreateProductInputGetters,
  createProductInputGetters,
} from '@/store/modules/createProductInput/createProductInputGetters'
import {
  createProductInputMutations,
  CreateProductInputMutations,
} from '@/store/modules/createProductInput/createProductInputMutations'
// product input end
// search start
import {
  SearchActions,
  searchActions,
} from '@/store/modules/search/search-actions'
import {
  SearchGetters,
  searchGetters,
} from '@/store/modules/search/search-getters'
import {
  SearchMutations,
  searchMutations,
} from '@/store/modules/search/search-mutations'
// search end
import * as userModule from '@/store/modules/user'
import * as variableModule from '@/store/modules/variables'
import { Store } from '@/types/store'

import { initialState } from './initialState'

const plugins = []
if (process.env.NODE_ENV === 'development') {
  plugins.push(createLogger())
}

export const store = createStore({
  state: initialState,
  actions: {
    ...variableModule.actions,
    ...userModule.actions,
    ...createProductInputActions,
    ...searchActions,
  },
  mutations: {
    ...variableModule.mutations,
    ...userModule.mutations,
    ...createProductInputMutations,
    ...searchMutations,
  },
  getters: {
    ...variableModule.getters,
    ...userModule.getters,
    ...createProductInputGetters,
    ...searchGetters,
  },
  plugins,
})

export function useStore(): Store {
  return store as Store
}

export type ActionsPayload = variableModule.ActionsPayload &
  userModule.ActionsPayload &
  CreateProductInputActions &
  SearchActions

export type MutationsPayload = variableModule.MutationPayload &
  userModule.MutationPayload &
  CreateProductInputMutations &
  SearchMutations

export type Getters = variableModule.Getters &
  userModule.Getters &
  CreateProductInputGetters &
  SearchGetters
