// import ProductModel from '@/models/product.model'
// import { EditListProduct, ProductInput } from '@/types/product'
// import { store } from '@/store'
// import { Item } from '@vuex-orm/core'
// // functions use different approaches due to some randomness in the Vuex-ORM GraphQL Plugin tools
//
// export class ProductApi {
//   static async createProduct(data: ProductInput): Promise<void> {
//     data.id = new Date().valueOf().toString()
//     try {
//       await ProductModel.dispatch('mutate', {
//         name: 'createProduct',
//         args: { product: data }
//       })
//     } catch (e) {
//       // TODO muted error. need to fix it
//       return e
//     }
//   }
//
//   static async fetchProductById(id: string): Promise<Item<ProductModel>> {
//     // get product and save it into type orm
//     await ProductModel.dispatch('query', {
//       name: 'product',
//       filter: { id },
//       bypassCache: true
//     })
//     // get product from typeorm entities
//     const foundProduct = await ProductModel.find(id)
//     return foundProduct
//   }
//
//   static async updateProduct(id: string, data: ProductInput): Promise<void> {
//     await ProductModel.update({
//       where: id,
//       data: data
//     })
//     const product = ProductModel.find(id)
//     if (product) {
//       try {
//         await product.$dispatch('push', { data: product })
//       } catch (e) {
//         // TODO i need to fix this bug later
//         return e
//       }
//     }
//   }
//
//   static async removeProduct(id: string): Promise<void> {
//     const product = await ProductModel.find(id)
//     console.log(product)
//     if (product) {
//       try {
//         await product.$dispatch('destroy', { id: id })
//       } catch (e) {
//         // TODO i need to fix this bug later
//         console.log(e)
//         // return e
//       }
//     }
//   }
// }
//
// // const QUERY = `mutation CreateProduct($product: ProductInput!) {
// //          createProduct(product: $product) {
// //           id
// //           name
// //           img
// //           price
// //           description
// //           category
// //         }
// //      }`
