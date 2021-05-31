import { gql } from '@apollo/client'

export const GET_PRODUCT_BY_ID = gql(`
      query Product($_id: String!) {
        product(_id: $_id) {
          _id
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
      }`)
// --------------------------------- Admin Layout --------------------------------- //

export const CREATE_PRODUCT = gql(`
 mutation CreateProduct($createProduct: CreateProductInput!) {
   createProduct(createProduct: $createProduct) {
     categoryId
     amount
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
            discount {
              percentage
            }
          }
        }
      }`)

export const GET_PRODUCTS_ORDER_BY = gql(`
      query ProductsByOrder($orderBy: String!, $orderParam: String!) {
        productsByOrder(orderBy: $orderBy, orderParam: $orderParam) {
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

export const GET_PRODUCTS_CART_LIST = gql(`
      query ProductsForCart($ids: [String!]!) {
        productsForCart(ids: $ids) {
          _id
          productData {
            name
            images {
              id 
              imgUrl
            }
            price
            discount {
              percentage
            }
          }
        }
      }`)
