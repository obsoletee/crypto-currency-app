import { Dispatch, SetStateAction, MouseEvent } from 'react';
import { Button, Modal } from 'antd';

import { PortfolioItem } from '../../../../PortfolioContext/PortfolioContext';
import styles from './ModalPortfolio.module.scss';

interface ModalPortfolioProps {
  isModalVisible: boolean;
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
  portfolio: PortfolioItem[];
  removeFromPortfolio: (itemId: string) => void;
}

export const ModalPortfolio = ({
  isModalVisible,
  setIsModalVisible,
  portfolio,
  removeFromPortfolio,
}: ModalPortfolioProps) => {
  const handleOk = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsModalVisible(false);
  };

  const handleCancel = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal
        onCancel={handleCancel}
        onOk={handleOk}
        title={`Portfolio`}
        visible={isModalVisible}
      >
        {portfolio.map((crypt) => (
          <div className={styles.modalPortfolio} key={crypt.id}>
            <div>Symbol: {crypt.symbol}</div>
            <div>Price: {crypt.price}</div>
            <div>Count: {crypt.count}</div>
            <Button
              onClick={() => {
                removeFromPortfolio(crypt.id);
                setIsModalVisible(false);
              }}
              type="primary"
            >
              Удалить
            </Button>
            <br />
            <br />
          </div>
        ))}
      </Modal>
    </>
  );
};
