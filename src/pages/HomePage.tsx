import { useEffect, useState } from 'react';
import { Header, Main } from '../components';
import { useDispatch } from 'react-redux';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../api/getRepos';
import { getRepos } from '../store/repos/reposSlice';
import { IGraphQL, IGraphQLAPI } from '../types';

export const HomePage = () => {
  const [searchString, setSearchString] = useState<string>('');
  const dispatch = useDispatch();
  const { data, loading, error } = useQuery<IGraphQLAPI>(GET_REPOSITORIES, {
    variables: { searchString, repoCount: 100 },
  });

  useEffect(() => {
    const newData: IGraphQL = {
      repos: data?.search?.repos,
      loading,
      error,
    };
    dispatch(getRepos(newData));
  }, [loading, data]);

  return (
    <>
      <Header setSearchString={setSearchString} />
      <Main searchString={searchString} />
    </>
  );
};
