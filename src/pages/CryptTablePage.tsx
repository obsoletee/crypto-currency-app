import { ChangeEvent, useEffect, useState } from 'react';

import { CryptTable } from '../components/CryptTable/CryptTable';
import { getAllData } from '../services/CryptService';
import { ICryptResponse } from '../types/ICrypt';
import { Search } from '../components/Search/Search';
import { useFetching } from '../hooks/useFetching';

export const CryptTablePage = () => {
  const [limit, setLimit] = useState<number>(10);
  const [offset, setOffset] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const {
    data,
    fetching: fetchData,
    isPostLoading,
  } = useFetching<ICryptResponse>({
    callback: () => getAllData(limit, offset, searchQuery),
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setOffset(0);
  };

  useEffect(() => {
    fetchData();
  }, [limit, offset, searchQuery]);

  const cleanData = data?.data.filter((crypt) => Number(crypt.priceUsd) > 0.01);

  return (
    <>
      <Search searchQuery={searchQuery} handleChange={handleChange} />
      <CryptTable
        setOffset={setOffset}
        limit={limit}
        setLimit={setLimit}
        cryptData={cleanData}
        isLoading={isPostLoading}
      />
    </>
  );
};
