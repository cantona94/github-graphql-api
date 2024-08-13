import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query Search($searchString: String!, $repoCount: Int!) {
    search(query: $searchString, type: REPOSITORY, last: $repoCount) {
      repositoryCount
      repos: nodes {
        ... on Repository {
          name
          languages(first: 1) {
            nodes {
              name
            }
          }
          forkCount
          stargazers {
            totalCount
          }
          updatedAt
        }
      }
    }
  }
`;
