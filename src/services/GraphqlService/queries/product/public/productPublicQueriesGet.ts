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
            discount {
              percentage
            }
          }
        }
      }`)

export const GET_PRODUCTS_BY_SEARCH = gql(`
      query ProductsBySearch($searchString: String!) {
        productsBySearch(searchString: $searchString) {
          _id
          productData {
            name
            images {
              id 
              imgUrl
            }
          }
        }
      }`)

// export const GET_PRODUCTS_CART_LIST = gql(`
//       query ProductsForCart($ids: [String!]!) {
//         productsForCart(ids: $ids) {
//           _id
//           productData {
//             name
//             images {
//               id
//               imgUrl
//             }
//             price
//             discount {
//               percentage
//             }
//           }
//         }
//       }`)
