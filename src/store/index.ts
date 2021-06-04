import { createLogger, createStore } from 'vuex'

// product input start
import {
  ProductInputActions,
  productInputActions,
} from '@/store/modules/productInput/productInputActions'
import {
  ProductInputGetters,
  productInputGetters,
} from '@/store/modules/productInput/productInputGetters'
import {
  productInputMutations,
  ProductInputMutationsPayload,
} from '@/store/modules/productInput/productInputMutations'
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
    ...productInputActions,
    ...searchActions,
  },
  mutations: {
    ...variableModule.mutations,
    ...userModule.mutations,
    ...productInputMutations,
    ...searchMutations,
  },
  getters: {
    ...variableModule.getters,
    ...userModule.getters,
    ...productInputGetters,
    ...searchGetters,
  },
  plugins,
})

export function useStore(): Store {
  return store as Store
}

export type ActionsPayload = variableModule.ActionsPayload &
  userModule.ActionsPayload &
  ProductInputActions &
  SearchActions

export type MutationsPayload = variableModule.MutationPayload &
  userModule.MutationPayload &
  ProductInputMutationsPayload &
  SearchMutations

export type Getters = variableModule.Getters &
  userModule.Getters &
  ProductInputGetters &
  SearchGetters
