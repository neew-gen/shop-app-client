import { MutationTree } from 'vuex'

import { ProductSearchItem } from '@/types/product'
import { Mutations } from '@/types/store/mutations'
import { State } from '@/types/store/state'

export type SearchMutations = {
  updateSearchResult: ProductSearchItem[]
  updateSearchLoading: boolean
}

export const searchMutations: MutationTree<State> &
  Mutations<SearchMutations> = {
  updateSearchResult({ search }, newSearchResult) {
    search.searchResult = newSearchResult
  },
  updateSearchLoading({ search }, newSearchLoading) {
    search.searchLoading = newSearchLoading
  },
}
