import {
  GetterTree,
  MutationTree,
  ActionContext,
  CommitOptions,
  createLogger
} from 'vuex'

import { initialState } from '../initialState'
import { CategoriesItemType, ProductItemType, CartItemType } from '@/types'


/*
   ---------------------- Mutations this is your code----------------------------
 */

export type MutationPayload = {
  addProduct: string
}

export const mutations: MutationTree<State> & Mutations = {
  // eslint-disable-next-line no-empty-pattern
  addProduct({}, newUserName) {
    return 'asdf'
  }
}

/*
   ---------------------- Getters -------------------------------
 */

export type Getters = {
  categoriesGet(state: State): CategoriesItemType[]
  productsGet(
    state: State
  ): {
    (category: string): ProductItemType[]
    (cartItems: CartItemType[]): ProductItemType[]
  }
  productGet(state: State): (category: string, id: string) => ProductItemType
}

export const getters: GetterTree<State, State> & Getters = {
  categoriesGet: ({ categories }) => {
    return categories
  },
  // !!!!!!!!!!!!!!!!!!!!!!! костыль any !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  productsGet: ({ products }: any) => (
    arg: string | CartItemType[]
  ): ProductItemType[] => {
    if (typeof arg === 'string') {
      return products[arg]
    } else {
      return arg.map((cartItem: CartItemType) => {
        const obtainedByCategory = products[cartItem.category]
        const [obtainedById] = obtainedByCategory.filter(
          (productItem: ProductItemType) => productItem.id === cartItem.id
        )
        return obtainedById
      })
    }
  },
  productGet: ({ products }: any) => (category, id): ProductItemType => {
    const productsCategory = products[category]
    const [product] = productsCategory.filter(
      (p: ProductItemType) => p.id === id
    )
    return product
  }
}

/*
   ---------------------- Actions -------------------------------
 */

export type ActionsPayload = {
  addProduct: [payload: ProductItemType, returnVal: void];
};

export const actions: Actions = {
  async addProduct({ commit }, payload) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    commit("addProduct", payload);
  },
};

/*
   ---------------------- Actions no change code -----------------------------
 */

type Actions = {
  [Property in keyof ActionsPayload]: (
    augContext: AugmentedActionContext,
    payload: ActionsPayload[Property][0]
  ) => ActionsPayload[Property][1];
};

type AugmentedActionContext = {
  commit<K extends keyof MutationPayload>(
    key: K,
    payload: MutationPayload[K],
    options?: CommitOptions
  ): void;
} & Omit<ActionContext<State, State>, "commit">;

/*
   ---------------------- Mutations - no change code ------------------------
 */

type Mutations = {
  [Property in keyof MutationPayload]: (
    state: State,
    payload: MutationPayload[Property]
  ) => void
}

/*
   ---------------------- Getters - no change code -------------------------------
 */
type State = typeof initialState
