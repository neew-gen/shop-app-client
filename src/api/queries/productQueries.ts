import { gql } from '@apollo/client'

export const GET_PRODUCT_BY_ID = gql(`
      query Product($id: String!) {
        product(id: $id) {
          id
          name
          imgUrl
          category
          price
          description
        }
      }`)

export const GET_PRODUCTS_EDITLIST = gql(`
  query Products {
    products {
      id
      name
      imgUrl
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
          category
        }
      }`)

export const UPDATE_PRODUCT = gql(`
      mutation UpdateProduct($product: UpdateProductInput!, $id: String!) {
        updateProduct(product: $product, id: $id) {
          name
          imgUrl
          category
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
          category
        }
      }`)
