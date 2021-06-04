import { GetterTree } from 'vuex'

import { ProductSearchItem } from '@/types/product'
import { State } from '@/types/store/state'

export type SearchGetters = {
  getSearchResult(state: State): ProductSearchItem[]
  getSearchLoading(state: State): boolean
}

export const searchGetters: GetterTree<State, State> & SearchGetters = {
  getSearchResult: ({ search }) => {
    return search.searchResult
  },
  getSearchLoading: ({ search }) => {
    return search.searchLoading
  },
}
