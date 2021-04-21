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
import { CREATE_SWIPE } from '@/api/graphql-api/queries/swipeQueries'

export function graphqlFetch(
  query: DocumentNode,
): Promise<ApolloQueryResult<unknown>> {
  return apollo.query({
    query,
  })
}

export function graphqlFetchBy(
  query: DocumentNode,
  variable?: { [key: string]: string },
): Promise<ApolloQueryResult<unknown>> {
  return apollo.query({
    query,
    variables: { ...variable },
  })
}

export function graphqlCreate<Input>(key: string, input: Input): void {
  const date = new Date().valueOf().toString()
  switch (key) {
    case 'product': {
      const id = 'p' + date
      apollo.mutate({
        mutation: CREATE_PRODUCT,
        variables: { product: { id, ...input } },
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
  }
}

// export class GraphqlApi extends Mixin(ProductApi, CategoryApi, SwipeApi) {
// static async fetchAll<T>(query: DocumentNode): Promise<T[]> {
//   const res = await apollo.query({
//     query: query
//   })
//   // We get an object with a field that contains data. We need to extract it
//   const toValues: Array<T[]> = Object.values(res.data)
//   if (toValues.length > 1) console.error('We got more than 1 value')
//   return toValues[0]
// }
// static fetchAll(query: DocumentNode): Promise<ApolloQueryResult<unknown>> {
//   return apollo.query({
//     query,
//   })
// }
// static fetchBy(
//   query: DocumentNode,
//   variable?: { [key: string]: string },
// ): Promise<ApolloQueryResult<unknown>> {
//   return apollo.query({
//     query,
//     variables: { ...variable },
//   })
// }
// static async fetchById<T>(query: DocumentNode, id: string): Promise<T> {
//   const res = await apollo.query({
//     query: query,
//     variables: { id },
//   })
//   // We get an object with a field that contains data. We need to extract it
//   const toValues: T[] = Object.values(res.data)
//   if (toValues.length > 1) console.error('We got more than 1 value')
//   return toValues[0]
// }
// }
