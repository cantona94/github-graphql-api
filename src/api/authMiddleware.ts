import { ApolloLink } from '@apollo/client';

const token = import.meta.env.VITE_TOKEN;

export const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return forward(operation);
});
