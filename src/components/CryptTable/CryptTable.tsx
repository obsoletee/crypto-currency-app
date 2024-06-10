import { Button, Image, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';

import { ICrypt } from '../../types/ICrypt';
import { PaginationBlock } from '../Pagination/PaginationBlock';

interface CryptTableProps {
  cryptData?: ICrypt[];
  isLoading: boolean;
  setLimit: Dispatch<SetStateAction<number>>;
  limit: number;
  setOffset: Dispatch<SetStateAction<number>>;
  showModal: (crypt: ICrypt) => void;
}

interface DataType {
  key: string;
  symbol: string;
  logo: JSX.Element;
  priceUsd: string;
  marketCapUsd: string;
  changePercent24Hr: string;
  action: JSX.Element;
}

export const CryptTable = ({
  limit,
  setOffset,
  setLimit,
  cryptData,
  isLoading,
  showModal,
}: CryptTableProps) => {
  const dataSource = cryptData?.map((crypt, index) => ({
    key: index.toString(),
    symbol: crypt.symbol,
    logo: (
      <Image
        src={`https://assets.coincap.io/assets/icons/${crypt.symbol.toLowerCase()}@2x.png`}
        height={40}
        width={40}
        alt={crypt.symbol}
      />
    ),
    priceUsd: Number(crypt.priceUsd).toFixed(2),
    marketCapUsd: Number(crypt.marketCapUsd).toFixed(2),
    changePercent24Hr: Number(crypt.changePercent24Hr).toFixed(2),
    action: (
      <Button
        onClick={(e) => {
          e.stopPropagation();
          showModal(crypt);
        }}
        shape={'round'}
        size={'middle'}
        type={'primary'}
      >
        Add
      </Button>
    ),
  }));

  const columns: ColumnsType<DataType> = [
    {
      title: 'Symbol',
      dataIndex: 'symbol',
      key: 'symbol',
      sorter: (a, b) => a.symbol.localeCompare(b.symbol),
    },
    { title: 'Logo', dataIndex: 'logo', key: 'logo' },
    {
      title: 'Price (USD)',
      dataIndex: 'priceUsd',
      key: 'priceUsd',
      sorter: (a, b) => parseFloat(a.priceUsd) - parseFloat(b.priceUsd),
    },
    {
      title: 'Market Cap (USD)',
      dataIndex: 'marketCapUsd',
      key: 'marketCapUsd',
      sorter: (a, b) => parseFloat(a.marketCapUsd) - parseFloat(b.marketCapUsd),
    },
    {
      title: '24h Change (%)',
      dataIndex: 'changePercent24Hr',
      key: 'changePercent24Hr',
      sorter: (a, b) =>
        parseFloat(a.changePercent24Hr) - parseFloat(b.changePercent24Hr),
    },
    { title: 'Add', dataIndex: 'action', key: 'action' },
  ];

  const navigate = useNavigate();

  const onRowClick = (record: DataType) => {
    navigate(`/id${record.symbol.toLowerCase()}`);
  };

  return (
    <>
      <Table
        loading={isLoading}
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        scroll={{ x: true }}
        onRow={(record) => ({
          onClick: () => onRowClick(record),
        })}
      />
      <PaginationBlock
        setOffset={setOffset}
        limit={limit}
        setLimit={setLimit}
      />
    </>
  );
};
