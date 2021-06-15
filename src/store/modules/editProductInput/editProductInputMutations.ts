import { MutationTree } from 'vuex'

import { ProductDiscountInput, ProductImagesItem } from '@/types/product'
import { Mutations } from '@/types/store/mutations'
import { State } from '@/types/store/state'

export type EditProductInputMutations = {
  updateEditProductCategoryId: string
  updateEditProductAmount: number
  updateEditProductShow: boolean
  updateEditProductName: string
  updateEditProductPrice: number
  addEditProductImage: ProductImagesItem[]
  updateEditProductImage: ProductImagesItem
  deleteEditProductImage: ProductImagesItem[]
  updateEditProductDescription: string
  updateEditProductDiscount: null | ProductDiscountInput
}

export const editProductInputMutations: MutationTree<State> &
  Mutations<EditProductInputMutations> = {
  updateEditProductCategoryId({ inputs }, newCategoryId) {
    inputs.editProductInput.categoryId = newCategoryId
  },
  updateEditProductAmount({ inputs }, newAmount) {
    inputs.editProductInput.amount = newAmount
  },
  updateEditProductShow({ inputs }, newShow) {
    inputs.editProductInput.show = newShow
  },
  updateEditProductName({ inputs }, newName) {
    inputs.editProductInput.productData.name = newName
  },
  updateEditProductPrice({ inputs }, newPrice) {
    inputs.editProductInput.productData.price = newPrice
  },
  addEditProductImage({ inputs }, newImages) {
    inputs.editProductInput.productData.images = newImages
  },
  updateEditProductImage({ inputs }, imagesItem) {
    const updatingImage = inputs.editProductInput.productData.images.filter(
      (i: ProductImagesItem) => i.id === imagesItem.id,
    )[0]
    updatingImage.imgUrl = imagesItem.imgUrl
  },
  deleteEditProductImage({ inputs }, newImages) {
    inputs.editProductInput.productData.images = newImages
  },
  updateEditProductDescription({ inputs }, newDescription) {
    inputs.editProductInput.productData.description = newDescription
  },
  updateEditProductDiscount({ inputs }, discount) {
    if (!discount) {
      inputs.editProductInput.productData.discount = null
      return
    }
    if (!inputs.editProductInput.productData.discount) {
      inputs.editProductInput.productData.discount = {}
    }
    let prop: keyof ProductDiscountInput
    for (prop in discount) {
      inputs.editProductInput.productData.discount[prop] = discount[prop]
    }
  },
}
