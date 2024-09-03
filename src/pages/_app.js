import { ENV } from "@/utils";
import { AuthProvider } from "@/contexts";
import "@/styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import "@/scss/global.scss";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: ENV.URL_GRAPHQL,
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ApolloProvider>
  );
}
