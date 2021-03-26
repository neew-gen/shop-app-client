import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client'
const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: 'http://localhost:3000/graphql'
})

// Create the apollo client
export const apollo = new ApolloClient<NormalizedCacheObject>({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
})
