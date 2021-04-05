import { createStore, createLogger } from 'vuex'
import { initialState } from './initialState'
import { Store } from '@/types/store'

import {
  actions as productActions,
  mutations as productMutations,
  getters as productGetters
} from '@/store/modules/product'
import {
  actions as categoryActions,
  mutations as categoryMutations,
  getters as categoryGetters
} from '@/store/modules/category'
import {
  actions as swipeActions,
  mutations as swipeMutations,
  getters as swipeGetters
} from '@/store/modules/swipe'

const plugins = []
if (process.env.NODE_ENV === 'development') {
  plugins.push(createLogger())
}

export const store = createStore({
  state: initialState,
  actions: {
    // ...productModule.actions,
    // ...categoryModule.actions
    ...productActions,
    ...categoryActions,
    ...swipeActions
  },
  mutations: {
    // ...productModule.mutations,
    // ...categoryModule.mutations
    ...productMutations,
    ...categoryMutations,
    ...swipeMutations
  },
  getters: {
    // ...productModule.getters
    ...productGetters,
    ...categoryGetters,
    ...swipeGetters
  },
  plugins
})

export function useStore(): Store {
  return store as Store
}
