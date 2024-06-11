import { ChangeEvent, useEffect, useState } from 'react';

import { CryptTable } from '../components/CryptTable/CryptTable';
import { MyModal } from '../components/UI/Modal/MyModal/MyModal';
import { Portfolio } from '../components/Portfolio/Portfolio';
import { Search } from '../components/Search/Search';
import { useFetching } from '../hooks/useFetching';
import { getAllData } from '../services/CryptService';
import { ICrypt, ICryptResponse } from '../types/ICrypt';
import styles from './CryptTablePage.module.scss';

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
    <div className={styles.container}>
      <div className={styles.table}>
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
      <div className={styles.portfolio}>
        <Portfolio cryptData={cleanData} />
        <MyModal
          modalData={modalData}
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
      </div>
    </div>
  );
};
