import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client'

export default {
  install: (): ApolloClient<NormalizedCacheObject> => {
    const httpLink = new HttpLink({
      // You should use an absolute URL here
      uri: 'http://localhost:3000/graphql'
    })

    // Create the apollo client
    const apolloClient = new ApolloClient({
      link: httpLink,
      cache: new InMemoryCache(),
      connectToDevTools: true
    })
    return apolloClient
  }
}
