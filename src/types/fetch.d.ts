import { ApolloQueryResult, DocumentNode } from '@apollo/client'
import { Ref } from 'vue'

export type Fetcher = (
  query: DocumentNode
) => Promise<ApolloQueryResult<unknown>>
