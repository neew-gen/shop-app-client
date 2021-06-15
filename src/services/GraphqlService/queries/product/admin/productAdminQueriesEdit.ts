import { gql } from '@apollo/client'

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
      mutation DeleteProduct($_id: String!) {
        deleteProduct(_id: $_id) {
          _id
        }
      }`)
