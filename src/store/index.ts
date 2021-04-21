import { createLogger, createStore } from 'vuex'
import { initialState } from './initialState'
import { Store } from '@/types/store'
import {
  actions as variablesActions,
  getters as variablesGetters,
  mutations as variablesMutations,
} from '@/store/modules/variables'

import {
  actions as cartActions,
  getters as cartGetters,
  mutations as cartMutations,
} from '@/store/modules/cart'

const plugins = []
if (process.env.NODE_ENV === 'development') {
  plugins.push(createLogger())
}

export const store = createStore({
  state: initialState,
  actions: {
    ...variablesActions,
    ...cartActions,
  },
  mutations: {
    ...variablesMutations,
    ...cartMutations,
  },
  getters: {
    ...variablesGetters,
    ...cartGetters,
  },
  plugins,
})

export function useStore(): Store {
  return store as Store
}
