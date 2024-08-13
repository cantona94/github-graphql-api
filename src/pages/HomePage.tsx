import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../api/getRepos';

export const HomePage = () => {
  const searchString = 'react';

  const { data, loading, error } = useQuery(GET_REPOSITORIES, {
    variables: { searchString, repoCount: 10 },
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;
  return (
    <>
      {data.search.repos.map((el: any, index: number) => (
        <div key={index}>{el.name}</div>
      ))}
    </>
  );
};
