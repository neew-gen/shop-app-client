import { gql } from '@apollo/client'

export const GET_CATEGORIES_EDITLIST = gql(`
      query Categories {
        categories {
          id
          name
          imgUrl
        }
      }`)

export const GET_CATEGORY_BY_ID = gql(`
      query Category($id: String!) {
        category(id: $id) {
          id
          name
          imgUrl
          isPublic
        }
      }`)

export const CREATE_CATEGORY = gql(`
      mutation UpdateCategory($category: CategoryInput!) {
        createCategory(category: $category) {
          id
          name
          imgUrl
          isPublic
        }
      }`)

export const UPDATE_CATEGORY = gql(`
      mutation UpdateCategory($category: UpdateCategoryInput!, $id: String!) {
        updateCategory(category: $category, id: $id) {
          name
          imgUrl
          isPublic
        }
      }`)

export const DELETE_CATEGORY = gql(`
      mutation DeleteCategory($id: String!) {
        deleteCategory(id: $id) {
          id
          name
          imgUrl
          isPublic
        }
      }`)
