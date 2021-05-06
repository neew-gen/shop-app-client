import { MutationTree } from 'vuex'

import { ProductDiscount, ProductDiscountInput, ProductImagesItem } from '@/types/product'
import { Mutations } from '@/types/store/mutations'
import { State } from '@/types/store/state'

export type ProductInputMutationsPayload = {
  updateProductCategoryId: string
  updateProductCount: number
  updateProductShow: boolean
  updateProductName: string
  updateProductPrice: number
  addProductImage: ProductImagesItem
  updateProductImage: ProductImagesItem
  deleteProductImage: string
  updateProductDescription: string
  updateProductDiscount: ProductDiscountInput
}

export const productInputMutations: MutationTree<State> &
  Mutations<ProductInputMutationsPayload> = {
  updateProductCategoryId({ inputs }, newCategoryId) {
    inputs.productInput.categoryId = newCategoryId
  },
  updateProductCount({ inputs }, newCount) {
    inputs.productInput.count = newCount
  },
  updateProductShow({ inputs }, newShow) {
    inputs.productInput.show = newShow
  },
  updateProductName({ inputs }, newName) {
    inputs.productInput.productData.name = newName
  },
  updateProductPrice({ inputs }, newPrice) {
    inputs.productInput.productData.price = newPrice
  },
  addProductImage({ inputs }, newImagesItem) {
    inputs.productInput.productData.images.push(newImagesItem)
  },
  updateProductImage({ inputs }, imagesItem) {
    const updatingImage = inputs.productInput.productData.images.filter(
      (i: ProductImagesItem) => i.id === imagesItem.id,
    )[0]
    updatingImage.imgUrl = imagesItem.imgUrl
  },
  deleteProductImage({ inputs }, deletingId) {
    inputs.productInput.productData.images = inputs.productInput.productData.images.filter(
      (i: ProductImagesItem) => i.id !== deletingId,
    )
  },
  updateProductDescription({ inputs }, newDescription) {
    inputs.productInput.productData.description = newDescription
  },
  updateProductDiscount({ inputs }, discount) {
    let prop: keyof ProductDiscountInput
    for (prop in discount) {
      inputs.productInput.productData.discount[prop] = discount[prop]
    }
  },
}
