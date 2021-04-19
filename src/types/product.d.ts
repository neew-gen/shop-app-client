export type ProductType = {
  categoryId: string
  description: string
  id: string
  imgUrl: string
  name: string
  price: number
}

export type ProductCreateInput = {
  name: string
  imgUrl: string
  price: number
  description: string
  categoryId?: string
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
