import { v4 as uuidv4 } from 'uuid'

import { ProductDiscountInput, ProductImagesItem } from '@/types/product'
import { Actions } from '@/types/store/actions'

export type ProductInputActions = {
  updateProductCategoryId: [string, void]
  updateProductCount: [number, void]
  updateProductShow: [boolean, void]
  updateProductName: [string, void]
  updateProductPrice: [number, void]
  addProductImage: [string, void]
  updateProductImage: [ProductImagesItem, void]
  deleteProductImage: [string, void]
  updateProductDescription: [string, void]
  updateProductDiscount: [null | ProductDiscountInput, void]
}

export const productInputActions: Actions<ProductInputActions> = {
  updateProductCategoryId({ commit }, newCategoryId) {
    commit('updateProductCategoryId', newCategoryId)
  },
  updateProductCount({ commit }, newCount) {
    commit('updateProductCount', newCount)
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
  addProductImage({ commit }, imgUrl) {
    const id = uuidv4()
    const payload = { id, imgUrl }
    commit('addProductImage', payload)
  },
  updateProductImage({ commit }, imagesItem) {
    commit('updateProductImage', imagesItem)
  },
  deleteProductImage({ commit }, id) {
    commit('deleteProductImage', id)
  },
  updateProductDescription({ commit }, newDescription) {
    commit('updateProductDescription', newDescription)
  },
  updateProductDiscount({ commit }, discount) {
    commit('updateProductDiscount', discount)
  },
}
