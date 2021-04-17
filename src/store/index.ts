import { createStore, createLogger } from 'vuex'
import { initialState } from './initialState'
import { Store } from '@/types/store'

import {
  actions as cartActions,
  mutations as cartMutations,
  getters as cartGetters,
} from '@/store/modules/cart'

const plugins = []
if (process.env.NODE_ENV === 'development') {
  plugins.push(createLogger())
}

export const store = createStore({
  state: initialState,
  actions: {
    ...cartActions,
  },
  mutations: {
    ...cartMutations,
  },
  getters: {
    ...cartGetters,
  },
  plugins,
})

export function useStore(): Store {
  return store as Store
}
