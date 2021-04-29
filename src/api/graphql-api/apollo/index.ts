import {
  ApolloClient,
  DefaultOptions,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
}

let uri = ''
if (process.env.NODE_ENV === 'development') {
  uri = 'http://localhost:3000/graphql'
}
if (process.env.NODE_ENV === 'production') {
  uri = `https://shop-app69.herokuapp.com/graphql`
}
const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri,
  fetchOptions: {},
})

export const apollo = new ApolloClient<NormalizedCacheObject>({
  link: httpLink,
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
  connectToDevTools: true,
})
