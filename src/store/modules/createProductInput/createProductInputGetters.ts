import { GetterTree } from 'vuex'

import { getLocalItem } from '@/services/LocalStorageService/LocalStorageService'
import {
  CreateProductInput,
  ProductDiscount,
  ProductImagesItem,
} from '@/types/product'
import { State } from '@/types/store/state'

export type CreateProductInputGetters = {
  getCreateProductCategoryId(state: State): string
  getCreateProductAmount(state: State): number
  getCreateProductShow(state: State): boolean
  getCreateProductName(state: State): string
  getCreateProductPrice(state: State): number
  getCreateProductImages(state: State): ProductImagesItem[]
  getCreateProductDescription(state: State): string
  getCreateProductDiscount(state: State): ProductDiscount
  getCreateProductInput(state: State): CreateProductInput
}

export const createProductInputGetters: GetterTree<State, State> &
  CreateProductInputGetters = {
  getCreateProductCategoryId: ({ inputs }) => {
    if (inputs.productInput.categoryId) return inputs.productInput.categoryId
    return getLocalItem('createCategoryId')
  },
  getCreateProductAmount: ({ inputs }) => {
    if (inputs.productInput.amount) return inputs.productInput.amount
    return getLocalItem('createProductAmount')
  },
  getCreateProductShow: ({ inputs }) => {
    if (inputs.productInput.show) return inputs.productInput.show
    return getLocalItem('createProductShow')
  },
  getCreateProductName: ({ inputs }) => {
    if (inputs.productInput.productData.name)
      return inputs.productInput.productData.name
    return getLocalItem('createProductName')
  },
  getCreateProductPrice: ({ inputs }) => {
    if (inputs.productInput.productData.price)
      return inputs.productInput.productData.price
    return getLocalItem('createProductPrice')
  },
  getCreateProductImages: ({ inputs }) => {
    if (inputs.productInput.productData.images.length === 0)
      return inputs.productInput.productData.images
    return getLocalItem('createProductImages')
  },
  getCreateProductDescription: ({ inputs }) => {
    if (inputs.productInput.productData.description)
      return inputs.productInput.productData.description
    return getLocalItem('createProductDescription')
  },
  getCreateProductDiscount: ({ inputs }) => {
    if (inputs.productInput.productData.discount)
      return inputs.productInput.productData.discount
    return getLocalItem('createProductDiscount')
  },
  getCreateProductInput: ({ inputs }) => {
    return inputs.productInput
  },
}
