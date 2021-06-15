import {
  deleteFromLocalArrayItem,
  pushToLocalArrayItem,
  removeLocalItems,
  setLocalItem,
} from '@/services/LocalStorageService/LocalStorageService'
import { ProductDiscountInput, ProductImagesItem } from '@/types/product'
import { Actions } from '@/types/store/actions'

export type CreateProductInputActions = {
  updateCreateProductCategoryId: [string, void]
  updateCreateProductAmount: [number, void]
  updateCreateProductShow: [boolean, void]
  updateCreateProductName: [string, void]
  updateCreateProductPrice: [number, void]
  addCreateProductImage: [ProductImagesItem, void]
  updateCreateProductImage: [ProductImagesItem, void]
  deleteCreateProductImage: [string, void]
  updateCreateProductDescription: [string, void]
  updateCreateProductDiscount: [null | ProductDiscountInput, void]
  clearCreateProduct: [void, void]
}

export const createProductInputActions: Actions<CreateProductInputActions> = {
  updateCreateProductCategoryId({ commit }, newCategoryId) {
    setLocalItem('createCategoryId', newCategoryId)
    commit('updateCreateProductCategoryId', newCategoryId)
  },
  updateCreateProductAmount({ commit }, newAmount) {
    setLocalItem('createProductAmount', newAmount)
    commit('updateCreateProductAmount', newAmount)
  },
  updateCreateProductShow({ commit }, newShow) {
    setLocalItem('createProductShow', newShow)
    commit('updateCreateProductShow', newShow)
  },
  updateCreateProductName({ commit }, newName) {
    setLocalItem('createProductName', newName)
    commit('updateCreateProductName', newName)
  },
  updateCreateProductPrice({ commit }, newPrice) {
    setLocalItem('createProductPrice', newPrice)
    commit('updateCreateProductPrice', newPrice)
  },
  addCreateProductImage({ commit }, newImage) {
    const newImagesValue = pushToLocalArrayItem<ProductImagesItem>(
      'createProductImages',
      newImage,
    )
    commit('addCreateProductImage', newImagesValue)
  },
  updateCreateProductImage({ commit }, imagesItem) {
    setLocalItem('createProductImage', imagesItem)
    commit('updateCreateProductImage', imagesItem)
  },
  deleteCreateProductImage({ commit }, id) {
    const newImagesValue = deleteFromLocalArrayItem<ProductImagesItem>(
      'createProductImages',
      id,
    )
    if (!newImagesValue) return
    commit('deleteCreateProductImage', newImagesValue)
  },
  updateCreateProductDescription({ commit }, newDescription) {
    setLocalItem('createProductDescription', newDescription)
    commit('updateCreateProductDescription', newDescription)
  },
  updateCreateProductDiscount({ commit }, discount) {
    setLocalItem('createProductDiscount', discount)
    commit('updateCreateProductDiscount', discount)
  },
  clearCreateProduct({ commit }) {
    removeLocalItems([
      'createCategoryId',
      'createProductAmount',
      'createProductShow',
      'createProductName',
      'createProductPrice',
      'createProductImages',
      'createProductImage',
      'createProductDescription',
      'createProductDiscount',
    ])
    commit('updateCreateProductCategoryId', '')
    commit('updateCreateProductAmount', 0)
    commit('updateCreateProductShow', true)
    commit('updateCreateProductName', '')
    commit('updateCreateProductPrice', 0)
    commit('addCreateProductImage', [])
    commit('updateCreateProductDescription', '')
    commit('updateCreateProductDiscount', null)
  },
}
