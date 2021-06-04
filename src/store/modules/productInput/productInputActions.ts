import { v4 as uuidv4 } from 'uuid'

import {
  deleteFromLocalArrayItem,
  pushToLocalArrayItem,
} from '@/services/LocalStorageService/LocalStorageService'
import { ProductDiscountInput, ProductImagesItem } from '@/types/product'
import { Actions } from '@/types/store/actions'

export type ProductInputActions = {
  updateProductCategoryId: [string, void]
  updateProductAmount: [number, void]
  updateProductShow: [boolean, void]
  updateProductName: [string, void]
  updateProductPrice: [number, void]
  addProductImage: [ProductImagesItem, void]
  updateProductImage: [ProductImagesItem, void]
  deleteProductImage: [string, void]
  updateProductDescription: [string, void]
  updateProductDiscount: [null | ProductDiscountInput, void]
  updateProductInputShow: [{ inputName: string; newStatus: boolean }, void]
}

export const productInputActions: Actions<ProductInputActions> = {
  updateProductCategoryId({ commit }, newCategoryId) {
    commit('updateProductCategoryId', newCategoryId)
  },
  updateProductAmount({ commit }, newAmount) {
    commit('updateProductAmount', newAmount)
  },
  updateProductShow({ commit }, newShow) {
    commit('updateProductShow', newShow)
  },
  updateProductName({ commit }, newName) {
    commit('updateProductName', newName)
  },
  updateProductPrice({ commit }, newPrice) {
    commit('updateProductPrice', newPrice)
  },
  addProductImage({ commit }, newImage) {
    const newImagesValue = pushToLocalArrayItem<ProductImagesItem>(
      'productImages',
      newImage,
    )
    commit('addProductImage', newImagesValue)
  },
  updateProductImage({ commit }, imagesItem) {
    commit('updateProductImage', imagesItem)
  },
  deleteProductImage({ commit }, id) {
    const newImagesValue = deleteFromLocalArrayItem<ProductImagesItem>(
      'productImages',
      id,
    )
    if (!newImagesValue) return
    commit('deleteProductImage', newImagesValue)
  },
  updateProductDescription({ commit }, newDescription) {
    commit('updateProductDescription', newDescription)
  },
  updateProductDiscount({ commit }, discount) {
    commit('updateProductDiscount', discount)
  },
  updateProductInputShow({ commit }, showPayload) {
    commit('updateProductInputShow', showPayload)
  },
}
