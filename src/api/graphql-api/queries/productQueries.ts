import { gql } from '@apollo/client'

export const GET_PRODUCT_BY_ID = gql(`
      query Product($id: String!) {
        product(id: $id) {
          id
          name
          imgUrl
          categoryId
          price
          description
        }
      }`)
// --------------------------------- Admin Layout --------------------------------- //

export const GET_PRODUCTS_EDITLIST = gql(`
  query Products {
    products {
      id
      name
      imgUrl
      categoryId
    }
  }
`)

export const CREATE_PRODUCT = gql(`
 mutation CreateProduct($product: ProductInput!) {
   createProduct(product: $product) {
     id
     name
     imgUrl
     price
     description
     categoryId
   }
 }
 `)

export const UPDATE_PRODUCT = gql(`
      mutation UpdateProduct($product: UpdateProductInput!, $id: String!) {
        updateProduct(product: $product, id: $id) {
          name
          imgUrl
          categoryId
          price
          description
        }
      }`)

export const DELETE_PRODUCT = gql(`
      mutation DeleteProduct($id: String!) {
        deleteProduct(id: $id) {
          id
          name
          imgUrl
          price
          description
          categoryId
        }
      }`)
// --------------------------------- Public Layout -------------------------------- //

export const GET_PRODUCTS_CATALOG_LIST_BY_CATEGORY_ID = gql(`
      query ProductsByCategoryId($categoryId: String!) {
        productsByCategoryId(categoryId: $categoryId) {
          id
          name
          imgUrl
          price
        }
      }`)
