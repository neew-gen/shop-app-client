import { gql } from '@apollo/client'

export const GET_SWIPES = gql(`
      query Swipes {
        swipes {
          id
          swipeIndex
          swipeData {
            imgUrl
            title
            text
          }
        }
      }`)

export const GET_SWIPE_BY_ID = gql(`
      query Swipe($id: String!) {
        swipe(id: $id) {
          swipeData {
            imgUrl
            title
            text
          }
        }
      }`)

export const CREATE_SWIPE = gql(`
      mutation CreateSwipe($createSwipeInput: CreateSwipeInput!) {
        createSwipe(createSwipeInput: $createSwipeInput) {
          id
          swipeData {
            imgUrl
            title
            text
          }
        }
      }`)

export const UPDATE_INDEX = gql(`
      mutation UpdateIndex($updateIndexInput: [UpdateIndexInput!]!) {
        updateIndex(updateIndexInput: $updateIndexInput) {
          id
          swipeIndex
        }
      }`)

export const UPDATE_SWIPE = gql(`
      mutation UpdateSwipe($updateSwipeInput: UpdateSwipeInput!, $id: String!) {
        updateSwipe(updateSwipeInput: $updateSwipeInput, id: $id) {
          swipeData {
            imgUrl
            title
            text
          }
        }
      }`)

export const DELETE_SWIPE = gql(`
      mutation DeleteSwipe($id: String!) {
        deleteSwipe(id: $id) {
          id
          swipeData {
            imgUrl
            title
            text
          }
        }
      }`)
