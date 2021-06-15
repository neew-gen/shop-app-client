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
    if (inputs.createProductInput.categoryId)
      return inputs.createProductInput.categoryId
    return getLocalItem('createCategoryId')
  },
  getCreateProductAmount: ({ inputs }) => {
    if (inputs.createProductInput.amount) return inputs.createProductInput.amount
    return getLocalItem('createProductAmount')
  },
  getCreateProductShow: ({ inputs }) => {
    if (inputs.createProductInput.show) return inputs.createProductInput.show
    return getLocalItem('createProductShow')
  },
  getCreateProductName: ({ inputs }) => {
    if (inputs.createProductInput.productData.name)
      return inputs.createProductInput.productData.name
    return getLocalItem('createProductName')
  },
  getCreateProductPrice: ({ inputs }) => {
    if (inputs.createProductInput.productData.price)
      return inputs.createProductInput.productData.price
    return getLocalItem('createProductPrice')
  },
  getCreateProductImages: ({ inputs }) => {
    if (inputs.createProductInput.productData.images.length === 0)
      return inputs.createProductInput.productData.images
    return getLocalItem('createProductImages')
  },
  getCreateProductDescription: ({ inputs }) => {
    if (inputs.createProductInput.productData.description)
      return inputs.createProductInput.productData.description
    return getLocalItem('createProductDescription')
  },
  getCreateProductDiscount: ({ inputs }) => {
    if (inputs.createProductInput.productData.discount)
      return inputs.createProductInput.productData.discount
    return getLocalItem('createProductDiscount')
  },
  getCreateProductInput: ({ inputs }) => {
    return inputs.createProductInput
  },
}
