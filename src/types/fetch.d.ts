import { ApolloQueryResult, DocumentNode } from '@apollo/client'
import { Ref } from 'vue'

export type Fetcher = () => Promise<ApolloQueryResult<unknown>>

// export type Fetcher = () => (
//   query: DocumentNode,
//   variable?: { [key: string]: string },
// ) => Promise<ApolloQueryResult<unknown>>
