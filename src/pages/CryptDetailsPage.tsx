import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Empty, Spin } from 'antd';

import { ICrypt, ICryptResponse } from '../types/ICrypt';
import { useFetching } from '../hooks/useFetching';
import { getAllData } from '../services/CryptService';
import { CryptInfo } from '../components/CryptInfo/CryptInfo';

export const CryptDetailsPage = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data,
    fetching: fetchData,
    isPostLoading,
  } = useFetching<ICryptResponse>({
    callback: () => getAllData(),
  });

  useEffect(() => {
    fetchData();
  }, []);

  const dataSource = data?.data.find(
    (crypt) => 'id' + crypt.symbol.toLowerCase() === id?.toLowerCase(),
  );

  return (
    <>
      {isPostLoading ? <Spin fullscreen /> : <></>}
      {!dataSource ? <Empty /> : <CryptInfo dataSource={dataSource} />}
    </>
  );
};
