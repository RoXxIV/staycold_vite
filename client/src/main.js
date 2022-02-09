import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import { DefaultApolloClient } from "@vue/apollo-composable";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";

const httpLink = createHttpLink({
  uri: "http://localhost:1337/graphql",
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.provide(DefaultApolloClient, apolloClient);
app.mount("#app");
