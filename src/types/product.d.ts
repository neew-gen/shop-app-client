// product type
export type Product = {
  _id: string
  createdAt: Date
  categoryId: string
  count: number
  productData: ProductData
}
export type ProductData = {
  name: string
  price: number
  images: ProductImagesItem[]
  description: string
  discount: null | ProductDiscount
}
export type ProductImagesItem = {
  id: string
  imgUrl: string
}
export type ProductDiscount = {
  percentage: number
  endsAt: null | Date
}

// product create input
export type CreateProductInput = {
  categoryId?: string
  count: number
  show: boolean
  productData: ProductData
}
export type ProductDiscountInput = {
  percentage?: number
  endsAt?: null | Date
}

// product list item
export type ProductListItem = {
  _id: string
  productData: ProductListItemData
}
export type ProductListItemData = {
  name: string
  price: number
  images: ProductImagesItem[]
  discount: null | ProductDiscountPercentage
}

export type ProductDiscountPercentage= {
  percentage: number
}

export type ProductCartItem = {
  _id: string
  value: number
  checked: boolean
  price: number
  discount: null | ProductDiscountPercentage
}

export type ProductUpdateInput = {
  name?: string
  imgUrl?: string
  price?: number
  description?: string
  categoryId?: string
}

export type ProductEditItem = {
  id: string
  imgUrl: string
  name: string
  categoryId: string
}
