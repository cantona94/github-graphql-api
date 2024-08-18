import { ApolloError } from '@apollo/client';

interface ITopic {
  topic: {
    name: string;
  };
}

export interface IRepo {
  id: string;
  name: string;
  forkCount: number;
  updatedAt: Date;
  stargazers: {
    totalCount: number;
  };
  description: string;
  primaryLanguage: {
    name: string;
  };
  repositoryTopics: {
    nodes: ITopic[];
  };
  licenseInfo: {
    name: string;
  };
}

export interface IFormatRepo {
  id: string;
  name: string;
  language: string;
  forkCount: number;
  starCount: number;
  updatedAt: number;
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

export type Order = 'asc' | 'desc';
