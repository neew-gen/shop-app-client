import { gql } from '@apollo/client'

export const GET_PRODUCTS_EDITLIST_ORDER_BY = gql(`
      query ProductsByOrder($orderBy: String!, $orderParam: String!) {
        productsByOrder(orderBy: $orderBy, orderParam: $orderParam) {
          _id
          categoryId
          productData {
            name
              images {
                id 
                imgUrl
            }
          }
        }
      }`)

export const GET_PRODUCTS_EDITLIST_BY_CATEGORY_ID = gql(`
      query ProductsByCategoryId($categoryId: String!, $sortBy: String!, $sortParam: String!) {
        productsByCategoryId(categoryId: $categoryId, sortBy: $sortBy, sortParam: $sortParam) {
          _id
          categoryId
          productData {
            name
            images {
              id 
              imgUrl
            }
          }
        }
      }`)

// export const GET_PRODUCTS_EDITLIST_BY_CATEGORY_I = gql(`
//       query ProductsByCategoryId($categoryId: String!) {
//         productsByCategoryId(categoryId: $categoryId) {
//           _id
//           categoryId
//           productData {
//             name
//             images {
//               id
//               imgUrl
//             }
//           }
//         }
//       }`)

// export const GET_PRODUCTS_EDITLIST = gql(`
//   query Products {
//     products {
//       _id
//       categoryId
//       productData {
//         name
//         images {
//           id
//           imgUrl
//         }
//       }
//     }
//   }
// `)
