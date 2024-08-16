import { ApolloError } from '@apollo/client';

interface ILanguages {
  name: string;
}

export interface IRepo {
  id: string;
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

export interface IFormatRepo {
  id: string
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

export interface EnhancedTableProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof IFormatRepo
  ) => void;

  order: Order;
  orderBy: string;
}
