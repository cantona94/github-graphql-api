import { useState } from 'react';
import { Header } from '../components';

export const HomePage = () => {
  const [searchString, setSearchString] = useState<string>('')

  return (
    <>
      <Header setSearchString={setSearchString} />
    </>
  );
};
