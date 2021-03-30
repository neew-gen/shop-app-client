export type HomeListItemType = {
  imgPath: string
  text: string
  background?: string
}

export type CategoriesItemType = {
  key: string
  name: string
  img: string
}

export type ProductItemType = {
  id?: string
  name: string
  img: string
  price: string
  description: string
  category: string
}

export type CartItemType = {
  category: string
  id: string
}

export type EditListType = {
  id: string
  imgUrl: string
  name: string
  categoryId?: string
  __typename: string
}
