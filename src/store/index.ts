import {
  createStore,
  Store as VuexStore,
  CommitOptions,
  DispatchOptions,
  createLogger
} from 'vuex'

import { initialState } from './initialState'

import * as moduleCatalog from './modules/catalog'
import * as moduleCart from './modules/cart'

// import VuexORM from '@vuex-orm/core'
// import ProductModel from '@/models/product.model'
// import CategoryModel from '@/models/category.model'
// import VuexORMGraphQL from '@vuex-orm/plugin-graphql'

// const database = new VuexORM.Database()
// database.register(ProductModel)
// database.register(CategoryModel)

// defaultOptions: {
//   watchQuery: {
//     fetchPolicy: 'cache-and-network'
//   }
// },
// const options = {
//   database: database,
//   url: 'http://localhost:3000/graphql',
//   debug: process.env.NODE_ENV !== 'production'
// }
// VuexORM.use(VuexORMGraphQL, options)
// const plugins = [VuexORM.install(database)]

const plugins = []
if (process.env.NODE_ENV === 'development') {
  plugins.push(createLogger())
}

export type State = typeof initialState

export const store = createStore({
  state: initialState,
  mutations: {
    // ...moduleCatalog.mutations
    ...moduleCart.mutations
  },
  getters: {
    ...moduleCatalog.getters,
    ...moduleCart.getters
  },
  actions: {
    // ...moduleCatalog.actions
    ...moduleCart.actions
  },
  plugins
})

type MutationPayload = moduleCart.MutationPayload

type ActionsPayload = moduleCart.ActionsPayload

type Getters = moduleCatalog.Getters & moduleCart.Getters

/*
  ---------------------- no change code ----------------------
*/

export type Store = Omit<
  VuexStore<State>,
  'getters' | 'commit' | 'dispatch'
> & {
  commit<K extends keyof MutationPayload>(
    key: K,
    payload: MutationPayload[K],
    options?: CommitOptions
  ): void
} & {
  dispatch<K extends keyof ActionsPayload>(
    key: K,
    payload: ActionsPayload[K][0],
    options?: DispatchOptions
  ): ActionsPayload[K][1]
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>
  }
}

export function useStore(): Store {
  return store as Store
}
