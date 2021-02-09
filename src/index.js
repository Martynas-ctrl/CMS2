import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from "./App";
import "./index.css";

const client = new ApolloClient({
  uri: "https://api-eu-central-1.graphcms.com/v2/ckjllfp2n3qu301z01aevdj9a/master",
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();