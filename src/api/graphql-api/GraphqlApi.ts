import { ApolloQueryResult, DocumentNode } from '@apollo/client'

import { apollo } from '@/api/graphql-api/apollo'
import {
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  UPDATE_CATEGORY,
} from '@/api/graphql-api/queries/categoryQueries'
import {
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
} from '@/api/graphql-api/queries/productQueries'
import {
  CREATE_SWIPE,
  DELETE_SWIPE,
  UPDATE_INDEX,
  UPDATE_SWIPE,
} from '@/api/graphql-api/queries/swipeQueries'

export function graphqlFetch(
  query: DocumentNode,
): Promise<ApolloQueryResult<any>> {
  return apollo.query({
    query,
  })
}

export function graphqlFetchBy(
  query: DocumentNode,
  variables: { [key: string]: string },
): Promise<ApolloQueryResult<any>> {
  return apollo.query({
    query,
    variables,
  })
}

export function graphqlCreate<Input>(key: string, input: Input): void {
  const date = new Date().valueOf().toString()
  switch (key) {
    case 'product': {
      apollo.mutate({
        mutation: CREATE_PRODUCT,
        variables: { createProduct: input },
      })
      break
    }
    case 'category': {
      const id = 'c' + date
      apollo.mutate({
        mutation: CREATE_CATEGORY,
        variables: { category: { id, ...input } },
      })
      break
    }
    case 'swipe': {
      const id = 's' + date
      apollo.mutate({
        mutation: CREATE_SWIPE,
        variables: { createSwipeInput: { id, swipeData: input } },
      })
      break
    }
  }
}
export async function graphqlUpdate<Input>(
  key: string,
  id: string,
  input: Input,
): Promise<void> {
  switch (key) {
    case 'product': {
      await apollo.mutate({
        mutation: UPDATE_PRODUCT,
        variables: { product: input, id },
      })
      break
    }
    case 'category': {
      await apollo.mutate({
        mutation: UPDATE_CATEGORY,
        variables: { category: input, id },
      })
      break
    }
    case 'swipeIndex': {
      await apollo.mutate({
        mutation: UPDATE_INDEX,
        variables: { updateIndexInput: input },
      })
      break
    }
    case 'swipe': {
      await apollo.mutate({
        mutation: UPDATE_SWIPE,
        variables: { id, updateSwipeInput: input },
      })
      break
    }
  }
}

export async function graphqlDelete(key: string, id: string): Promise<void> {
  switch (key) {
    case 'product': {
      await apollo.mutate({
        mutation: DELETE_PRODUCT,
        variables: { id },
      })
      break
    }
    case 'category': {
      await apollo.mutate({
        mutation: DELETE_CATEGORY,
        variables: { id },
      })
      break
    }
    case 'swipe': {
      await apollo.mutate({
        mutation: DELETE_SWIPE,
        variables: { id },
      })
      break
    }
  }
}
