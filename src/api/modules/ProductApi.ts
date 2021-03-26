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

export class ProductApi {
  static async createProduct(input: ProductCreateInput): Promise<void> {
    input.id = new Date().valueOf().toString()
    await apollo.mutate({
      mutation: CREATE_PRODUCT,
      variables: { product: input },
      update: (cache, mutationResult) => {
        const newProduct = mutationResult.data.createProduct
        const data = cache.readQuery({
          query: GET_PRODUCTS_EDITLIST
        })
        cache.writeQuery({
          query: GET_PRODUCTS_EDITLIST,
          // TODO need to fix types!
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          data: { products: [...data.products, newProduct] }
        })
      }
    })
  }

  static async updateProduct(
    id: string,
    input: ProductUpdateInput
  ): Promise<void> {
    await apollo.mutate({
      mutation: UPDATE_PRODUCT,
      variables: { product: input, id },
      update: cache => {
        const data = cache.readQuery({
          query: GET_PRODUCTS_EDITLIST
        })
        if (data) {
          // TODO need to refactor and redesign it
          // TODO need to fix types!
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          const index = data.products.findIndex(p => p.id === id)
          // TODO need to fix types!
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          const dataForMutation = _.cloneDeep(data.products)
          dataForMutation[index] = {
            id,
            name: input.name,
            imgUrl: input.imgUrl
          }
          cache.writeQuery({
            query: GET_PRODUCTS_EDITLIST,
            // TODO need to fix types!
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            data: { products: [...dataForMutation] }
          })
        }
      }
    })
  }

  static async deleteProduct(id: string): Promise<void> {
    await apollo.mutate({
      mutation: DELETE_PRODUCT,
      variables: { id }
    })
  }
}
