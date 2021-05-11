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

export const CREATE_PRODUCT = gql(`
 mutation CreateProduct($createProduct: CreateProductInput!) {
   createProduct(createProduct: $createProduct) {
     categoryId
     count
     show
     productData {
       name
       price
       images {
         id 
         imgUrl
       }
       description
       discount {
         percentage
         endsAt
       }
     }
   }
 }
 `)

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
export const GET_PRODUCTS_EDITLIST_BY_CATEGORY_ID = gql(`
      query ProductsByCategoryId($categoryId: String!) {
        productsByCategoryId(categoryId: $categoryId) {
          id
          name
          imgUrl
          categoryId
        }
      }`)

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
export const GET_PRODUCTS_CATALOG_LIST = gql(`
      query ProductsByCategoryId($categoryId: String!, $sortBy: String!, $sortParam: String!) {
        productsByCategoryId(categoryId: $categoryId, sortBy: $sortBy, sortParam: $sortParam) {
          _id
          productData {
            name
            images {
              id 
              imgUrl
            }
            price
          }
        }
      }`)
