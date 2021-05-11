// product type
export type Product = {
  _id: string
  createdAt: Date
  categoryId: string
  count: number
  show: boolean
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
  discount: null | ProductListDiscount
}
export type ProductListDiscount = {
  percentage: number
}

export type ProductUpdateInput = {
  name?: string
  imgUrl?: string
  price?: number
  description?: string
  categoryId?: string
}

export type ProductCartItem = {
  id: string
  name: string
  imgUrl: string
  price: number
  value: number
  checked: boolean
}

export type ProductEditItem = {
  id: string
  imgUrl: string
  name: string
  categoryId: string
}
