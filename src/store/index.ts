import { createLogger, createStore } from 'vuex'

import * as cartModule from '@/store/modules/cart'
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
    ...cartModule.actions,
    ...userModule.actions,
    ...productInputActions,
  },
  mutations: {
    ...variableModule.mutations,
    ...cartModule.mutations,
    ...userModule.mutations,
    ...productInputMutations,
  },
  getters: {
    ...variableModule.getters,
    ...cartModule.getters,
    ...userModule.getters,
    ...productInputGetters,
  },
  plugins,
})

export function useStore(): Store {
  return store as Store
}

export type ActionsPayload = variableModule.ActionsPayload &
  cartModule.ActionsPayload &
  userModule.ActionsPayload &
  ProductInputActions

export type MutationsPayload = variableModule.MutationPayload &
  cartModule.MutationPayload &
  userModule.MutationPayload &
  ProductInputMutationsPayload

export type Getters = variableModule.Getters &
  cartModule.Getters &
  userModule.Getters &
  ProductInputGetters
