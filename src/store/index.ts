import { createLogger, createStore } from 'vuex'

// product input start
import {
  ProductInputActions,
  productInputActions,
} from '@/store/modules/product-input/product-input-actions'
import {
  ProductInputGetters,
  productInputGetters,
} from '@/store/modules/product-input/product-input-getters'
import {
  productInputMutations,
  ProductInputMutationsPayload,
} from '@/store/modules/product-input/product-input-mutations'
// product input end
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
  },
  mutations: {
    ...variableModule.mutations,
    ...userModule.mutations,
    ...productInputMutations,
  },
  getters: {
    ...variableModule.getters,
    ...userModule.getters,
    ...productInputGetters,
  },
  plugins,
})

export function useStore(): Store {
  return store as Store
}

export type ActionsPayload = variableModule.ActionsPayload &
  userModule.ActionsPayload &
  ProductInputActions

export type MutationsPayload = variableModule.MutationPayload &
  userModule.MutationPayload &
  ProductInputMutationsPayload

export type Getters = variableModule.Getters &
  userModule.Getters &
  ProductInputGetters
