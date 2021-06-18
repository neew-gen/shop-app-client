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
    if (!inputs.createProductInput.categoryId) {
      inputs.createProductInput.categoryId = getLocalItem('createCategoryId')
    }
    return inputs.createProductInput.categoryId
  },
  getCreateProductAmount: ({ inputs }) => {
    if (!inputs.createProductInput.amount) {
      inputs.createProductInput.amount = getLocalItem('createProductAmount')
    }
    return inputs.createProductInput.amount
  },
  getCreateProductShow: ({ inputs }) => {
    if (inputs.createProductInput.show) return inputs.createProductInput.show
    return getLocalItem('createProductShow')
  },
  getCreateProductName: ({ inputs }) => {
    if (!inputs.createProductInput.productData.name) {
      inputs.createProductInput.productData.name = getLocalItem(
        'createProductName',
      )
    }
    return inputs.createProductInput.productData.name
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
    if (!inputs.createProductInput.productData.description) {
      inputs.createProductInput.productData.description = getLocalItem(
        'createProductDescription',
      )
    }
    return inputs.createProductInput.productData.description
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
