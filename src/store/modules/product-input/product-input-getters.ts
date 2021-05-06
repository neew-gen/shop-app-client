import { GetterTree } from 'vuex'

import {
  ProductCreateInput,
  ProductDiscount,
  ProductImagesItem,
} from '@/types/product'
import { State } from '@/types/store/state'

export type ProductInputGetters = {
  getProductCategoryId(state: State): string
  getProductCount(state: State): number
  getProductShow(state: State): boolean
  getProductName(state: State): string
  getProductPrice(state: State): number
  getProductImages(state: State): ProductImagesItem[]
  getProductDescription(state: State): string
  getProductDiscount(state: State): ProductDiscount
  getProductInput(state: State): ProductCreateInput
}

export const productInputGetters: GetterTree<State, State> &
  ProductInputGetters = {
  getProductCategoryId: ({ inputs }) => {
    return inputs.productInput.categoryId
  },
  getProductCount: ({ inputs }) => {
    return inputs.productInput.count
  },
  getProductShow: ({ inputs }) => {
    return inputs.productInput.show
  },
  getProductName: ({ inputs }) => {
    return inputs.productInput.productData.name
  },
  getProductPrice: ({ inputs }) => {
    return inputs.productInput.productData.price
  },
  getProductImages: ({ inputs }) => {
    return inputs.productInput.productData.images
  },
  getProductDescription: ({ inputs }) => {
    return inputs.productInput.productData.description
  },
  getProductDiscount: ({ inputs }) => {
    return inputs.productInput.productData.discount
  },
  getProductInput: ({ inputs }) => {
    return inputs.productInput
  },
}