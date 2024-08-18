import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query Search($searchString: String!, $repoCount: Int!) {
    search(query: $searchString, type: REPOSITORY, last: $repoCount) {
      repos: nodes {
        ... on Repository {
          id
          name
          forkCount
          stargazers {
            totalCount
          }
          updatedAt
          description
          primaryLanguage {
            name
          }
          repositoryTopics(first: 6) {
            nodes {
              topic {
                name
              }
            }
          }
          licenseInfo {
            name
          }
        }
      }
    }
  }
`;
