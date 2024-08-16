import "@/styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import "@/scss/global.scss";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache: new InMemoryCache(),
});

export default function App(props) {
  const { Component, pageProps } = props;
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
