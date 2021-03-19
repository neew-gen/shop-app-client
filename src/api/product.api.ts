import ProductModel from '@/models/catalog.model'
import { ProductInput } from '@/types/product.type'
import { createLogger } from 'vuex'

export class ProductApi {
  static async createProduct(data: ProductInput): Promise<void> {
    await ProductModel.insert({ data: data })
    const product = ProductModel.query().last()
    if (product)
      try {
        await product.$dispatch('persist', { id: product.$id })
      } catch (e) {
        return e
      }
  }
}
