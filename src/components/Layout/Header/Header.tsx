import { Link } from 'react-router-dom';
import styles from './header.module.scss';
import { useFetching } from '../../../hooks/useFetching';
import { ICryptResponse } from '../../../types/ICrypt';
import { getAllData } from '../../../services/CryptService';
import { useEffect } from 'react';
import { Spin } from 'antd';

export const Header = () => {
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

  const dataSource = data?.data.filter((crypt) => Number(crypt.rank) < 4);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.info}>
          <Link to="/" className={styles.title}>
            CryptoApp
          </Link>
          <div className={styles.logo}>
            <img
              src={`https://assets.coincap.io/assets/icons/btc@2x.png`}
              alt="logo"
            />
          </div>
        </div>
        <div className={styles.crypto}>
          {isPostLoading ? (
            <Spin />
          ) : (
            dataSource?.map((crypt) => (
              <div key={crypt.symbol} className={styles.elem}>
                {crypt.symbol}: {Number(crypt.priceUsd).toFixed(2)}
              </div>
            ))
          )}
        </div>
      </div>
    </header>
  );
};
