import { createLogger, createStore } from 'vuex'

import * as cartModule from '@/store/modules/cart'
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
  },
  mutations: {
    ...variableModule.mutations,
    ...cartModule.mutations,
    ...userModule.mutations,
  },
  getters: {
    ...variableModule.getters,
    ...cartModule.getters,
    ...userModule.getters,
  },
  plugins,
})

export function useStore(): Store {
  return store as Store
}

export type MutationPayload = variableModule.MutationPayload &
  cartModule.MutationPayload &
  userModule.MutationPayload

export type Getters = variableModule.Getters &
  cartModule.Getters &
  userModule.Getters
