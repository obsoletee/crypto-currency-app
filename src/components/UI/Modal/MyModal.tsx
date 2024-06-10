import { Dispatch, SetStateAction, useState } from 'react';
import { Input, Modal } from 'antd';

import { usePortfolioContext } from '../../../PortfolioContext/PortfolioContext';
import { ICrypt } from '../../../types/ICrypt';
import { PortfolioItem } from '../../../PortfolioContext/PortfolioContext';

interface MyModalProps {
  isModalVisible: boolean;
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
  modalData?: ICrypt;
}

export const MyModal = ({
  isModalVisible,
  setIsModalVisible,
  modalData,
}: MyModalProps) => {
  const [coinCount, setCoinCount] = useState(1);
  const [errorMessage, setErrorMessage] = useState('');
  const { addToPortfolio } = usePortfolioContext();

  const handleOk = () => {
    const localData: PortfolioItem = {
      id: modalData!.id,
      symbol: modalData!.symbol,
      price: modalData!.priceUsd,
      count: coinCount,
    };
    addToPortfolio(localData);
    setErrorMessage('');
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setErrorMessage('');
  };

  return (
    <>
      <Modal
        title={`Add ${modalData?.name} To Portfolio`}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>
          {modalData?.name} ({modalData?.symbol})
        </p>
        <Input
          defaultValue={1}
          type="number"
          value={coinCount}
          onChange={(e) => {
            setCoinCount(Number(e.currentTarget.value));
          }}
        />
        <p style={{ color: 'red' }}>{errorMessage}</p>
      </Modal>
    </>
  );
};
