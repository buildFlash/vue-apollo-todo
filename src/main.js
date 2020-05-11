import Vue from 'vue';
import VueApollo from 'vue-apollo';
import '@fortawesome/fontawesome-free/css/all.css';
import App from './App.vue';
import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { typeDefs, resolvers } from './resolvers';


Vue.config.productionTip = false;


Vue.use(VueApollo);

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  cache,
  typeDefs,
  resolvers,
});

cache.writeData({
  data: {
    todoItems: [
      {
        __typename: 'Item',
        id: 'dqdBHJGgjgjg',
        text: 'test',
        done: true,
      },
    ],
  },
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});




new Vue({
  render: h => h(App),
  apolloProvider,
}).$mount('#app');
