import { Dispatch, SetStateAction, useState } from 'react';
import { Input, Modal } from 'antd';

import { ICrypt } from '../../../types/ICrypt';

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
  const handleOk = () => {
    if (coinCount < 1) {
      setErrorMessage('Enter correct count.');
    } else {
      setIsModalVisible(false);
      const localData = {
        key: modalData?.id,
        symbol: modalData?.symbol,
        price: modalData?.priceUsd,
        count: coinCount,
      };
      if (localData.key) {
        localStorage.setItem(
          localData.key + localStorage.length,
          JSON.stringify(localData),
        );
      }
    }
    setCoinCount(1);
    setErrorMessage('');
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setCoinCount(1);
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
