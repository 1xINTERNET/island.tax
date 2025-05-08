import { ApolloClient, ApolloLink,HttpLink, InMemoryCache, NormalizedCacheObject } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

// TODO: Move this to env files
const NEXT_PUBLIC_GRAPHQL_ENDPOINT = "https://7d5113d3dba5034.qaack.1xinter.net/graphql";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    for (const err of graphQLErrors) {
      console.error(`[GraphQL error]: Message: ${err.message}, Location: ${err.locations}, Path: ${err.path}`);
    }
  }
  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
  }
});

const httpLink = new HttpLink({
  uri: NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  credentials: "omit",
});

const cache = new InMemoryCache({});

export const createApolloClient= (): ApolloClient<NormalizedCacheObject>  => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: ApolloLink.from([errorLink, httpLink]),
    cache,
    connectToDevTools: process.env.NODE_ENV === "development",
  });
}
