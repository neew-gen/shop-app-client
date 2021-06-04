import { awaitFetcher } from '@/services/FetchService/FetchService'
import { graphqlFetchBy } from '@/services/GraphqlService/GraphqlService'
import { GET_PRODUCTS_BY_SEARCH } from '@/services/GraphqlService/queries/productQueries'
import { ProductSearchItem } from '@/types/product'
import { Actions } from '@/types/store/actions'

export type SearchActions = {
  startSearch: [string, void]
}

export const searchActions: Actions<SearchActions> = {
  startSearch({ commit }, searchString) {
    if (searchString.length === 0) return
    commit('updateSearchLoading', true)
    awaitFetcher<ProductSearchItem[]>('NF', `/search`, () =>
      graphqlFetchBy(GET_PRODUCTS_BY_SEARCH, {
        searchString,
      }),
    ).then((res) => {
      if (!res) return
      commit('updateSearchResult', res)
      commit('updateSearchLoading', false)
    })
  },
}
