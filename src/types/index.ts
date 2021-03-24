type HomeListItemType = {
  imgPath: string
  text: string
  background?: string
}

type CategoriesItemType = {
  key: string
  name: string
  img: string
}

type ProductItemType = {
  id?: string
  name: string
  img: string
  price: string
  description: string
  category: string
}

type CartItemType = {
  category: string
  id: string
}

export { HomeListItemType, CategoriesItemType, ProductItemType, CartItemType }
