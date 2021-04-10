import { apollo } from '@/api/apollo'
import { ProductCreateInput, ProductUpdateInput } from '@/types/product'
import {
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCT_BY_ID,
  GET_PRODUCTS_EDITLIST,
  UPDATE_PRODUCT
} from '@/api/queries/productQueries'
import _ from 'lodash'
import { DocumentNode } from '@apollo/client'

export class ProductApi {
  // Method creates a new product and returns id.
  static async createProduct(input: ProductCreateInput): Promise<string> {
    input.id = 'p' + new Date().valueOf().toString()
    await apollo.mutate({
      mutation: CREATE_PRODUCT,
      variables: { product: input }
    })
    return input.id
  }

  static async updateProduct(
    id: string,
    input: ProductUpdateInput
  ): Promise<void> {
    await apollo.mutate({
      mutation: UPDATE_PRODUCT,
      variables: { product: input, id }
    })
  }

  static async deleteProduct(id: string): Promise<void> {
    await apollo.mutate({
      mutation: DELETE_PRODUCT,
      variables: { id }
    })
  }

  static async fetchProductsByCategoryId<T>(
    query: DocumentNode,
    categoryId: string
  ): Promise<T> {
    const res = await apollo.query({
      query: query,
      variables: { categoryId: categoryId }
    })
    // We get an object with a field that contains data. We need to extract it
    const toValues: T[] = Object.values(res.data)
    if (toValues.length > 1) console.error('We got more than 1 value')
    return toValues[0]
  }
}
