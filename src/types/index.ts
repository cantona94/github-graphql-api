import { ApolloError } from '@apollo/client';

interface ILanguages {
  name: string;
}

interface IRepo {
  name: string;
  forkCount: number;
  updatedAt: Date;
  languages: {
    nodes: ILanguages[];
  };
  stargazers: {
    totalCount: number;
  };
}

export interface IGraphQL {
  repos?: IRepo[] | null;
  loading: boolean;
  error?: ApolloError | null;
}

export interface IGraphQLAPI {
  search: {
    repos: IRepo[];
  };
}
