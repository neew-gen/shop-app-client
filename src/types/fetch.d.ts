import { ApolloQueryResult, DocumentNode } from '@apollo/client'
import { Ref } from 'vue'

export type ApolloFetcher = () => Promise<ApolloQueryResult<unknown>>
export type AxiosFetcher = () => Promise<any>

export type DataExtractor = () => (data: any) => Data

// export type Fetcher = () => (
//   query: DocumentNode,
//   variable?: { [key: string]: string },
// ) => Promise<ApolloQueryResult<unknown>>
