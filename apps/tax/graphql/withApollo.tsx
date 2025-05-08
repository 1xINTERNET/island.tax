import React from "react";
import { ApolloProvider } from "@apollo/client";

import { createApolloClient } from "./apolloClient";

export const withApollo = <P extends object>(Component: React.ComponentType<P>) => {
  return function ApolloWrappedComponent(props: P) {
    const client = React.useMemo(() => createApolloClient(), []);
    return (
      <ApolloProvider client={client}>
        <Component {...props} />
      </ApolloProvider>
    )
  }
}
