import {
  ApolloClient,
  DefaultOptions,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client'

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore'
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore'
  }
}

const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: 'http://localhost:3000/graphql',
  // uri: 'http://192.168.0.12:3000/graphql',
  fetchOptions: {}
})

// Create the apollo client
export const apollo = new ApolloClient<NormalizedCacheObject>({
  link: httpLink,
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
  connectToDevTools: true
})
