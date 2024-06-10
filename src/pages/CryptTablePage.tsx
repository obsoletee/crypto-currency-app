import { ChangeEvent, useEffect, useState } from 'react';

import { CryptTable } from '../components/CryptTable/CryptTable';
import { getAllData } from '../services/CryptService';
import { ICrypt, ICryptResponse } from '../types/ICrypt';
import { Search } from '../components/Search/Search';
import { useFetching } from '../hooks/useFetching';
import { Portfolio } from '../components/Portfolio/Portfolio';
import { MyModal } from '../components/UI/Modal/MyModal';

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

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [modalData, setModalData] = useState<ICrypt>();
  const showModal = (crypt: ICrypt) => {
    setIsModalVisible(true);
    setModalData(crypt);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      }}
    >
      {/* я не знаю можно писать стили так или надо выносить в модуль */}
      <div style={{ padding: '20px', width: '70%' }}>
        <Search searchQuery={searchQuery} handleChange={handleChange} />
        <CryptTable
          showModal={showModal}
          setOffset={setOffset}
          limit={limit}
          setLimit={setLimit}
          cryptData={cleanData}
          isLoading={isPostLoading}
        />
      </div>
      <div style={{ padding: '20px', width: '30%' }}>
        <Portfolio cleanData={cleanData} />
        <MyModal
          modalData={modalData}
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
      </div>
    </div>
  );
};
