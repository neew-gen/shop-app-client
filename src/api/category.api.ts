// import { CategoryInput } from '@/types/category'
// import CategoryModel from '@/models/category.model'
// import { EditListProduct, ProductInput } from '@/types/product'
// import { store } from '@/store'
// import { EditListType } from '@/types'
// import ProductModel from '@/models/product.model'
// import { Item } from '@vuex-orm/core'
//
// export class CategoryApi {
//   static async createCategory(categoryInput: CategoryInput): Promise<void> {
//     categoryInput.id = new Date().valueOf().toString()
//     try {
//       await CategoryModel.dispatch('mutate', {
//         name: 'createCategory',
//         args: { category: categoryInput }
//       })
//     } catch (e) {
//       // TODO muted error. need to fix it
//       // console.log(e)
//       return e
//     }
//   }
//
//   static async fetchCategoryById(id: string): Promise<Item<CategoryModel>> {
//     // get product and save it into type orm
//     await CategoryModel.dispatch('query', {
//       name: 'category',
//       filter: { id },
//       bypassCache: true
//     })
//     // get product from typeorm entities
//     const foundCategory = await CategoryModel.find(id)
//     return foundCategory
//   }
//
//   static async updateCategory(id: string, data: CategoryInput): Promise<void> {
//     await CategoryModel.update({
//       where: id,
//       data: data
//     })
//     const category = CategoryModel.find(id)
//     if (category) {
//       try {
//         await category.$dispatch('push', { data: category })
//       } catch (e) {
//         // TODO i need to fix this bug later
//         return e
//       }
//     }
//   }
// }
