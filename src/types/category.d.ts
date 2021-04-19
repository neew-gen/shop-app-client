export type CategoryCreateInput = {
  name: string
  imgUrl: string
  isPublic: boolean
}

export type CategoryUpdateInput = {
  name?: string
  imgUrl?: string
  isPublic?: boolean
}

export type CategoryType = {
  id: string
  name: string
  imgUrl: string
  isPublic: boolean
}

export type CategoryDropdownType = {
  id: string
  name: string
}

export type CategoriesCatalogList = {
  data: {
    categoriesPublic: CategoryType[]
  }
}
