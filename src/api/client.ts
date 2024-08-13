import { ApolloClient, HttpLink, InMemoryCache, concat } from '@apollo/client';
import { authMiddleware } from './authMiddleware';

const httpLink = new HttpLink({ uri: 'https://api.github.com/graphql' });

export const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache(),
});
