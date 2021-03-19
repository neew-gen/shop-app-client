import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
  split
} from '@apollo/client'
import { getMainDefinition } from '@apollo/client/utilities'

export default {
  install: (): ApolloClient<NormalizedCacheObject> => {
    const httpLink = new HttpLink({
      // You should use an absolute URL here
      uri: 'http://localhost:3000/graphql'
    })

    // using the ability to split links, you can send data to each link
    // depending on what kind of operation is being sent
    const link = split(
      // split based on operation type
      ({ query }) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const { kind, operation } = getMainDefinition(query)
        return kind === 'OperationDefinition' && operation === 'subscription'
      },
      httpLink
    )

    // Create the apollo client
    const apolloClient = new ApolloClient({
      link,
      cache: new InMemoryCache(),
      connectToDevTools: true
    })
    return apolloClient
  }
}
