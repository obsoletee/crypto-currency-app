import { ChangeEvent, useEffect, useState } from 'react';

import { CryptTable } from '../components/CryptTable/CryptTable';
import { useFetching } from '../hooks/useFetching';
import { ICryptResponse } from '../types/ICrypt';
import { Search } from '../components/Search/Search';
import { getAllData } from '../services/CryptService';

export const CryptTablePage = () => {
  const [limit, setLimit] = useState<number>(10);
  const [page, setPage] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const {
    fetching: fetchData,
    isPostLoading,
    data,
  } = useFetching<ICryptResponse>({
    callback: () => getAllData(limit, page, searchQuery),
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setPage(0);
  };

  useEffect(() => {
    fetchData();
  }, [page, searchQuery]);

  return (
    <>
      <Search searchQuery={searchQuery} handleChange={handleChange} />
      <CryptTable
        setLimit={setLimit}
        page={page}
        setPage={setPage}
        cryptData={data?.data}
        isLoading={isPostLoading}
      />
    </>
  );
};
