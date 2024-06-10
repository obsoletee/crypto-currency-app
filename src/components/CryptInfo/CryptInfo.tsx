import { Button, Select } from 'antd';
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useEffect, useState } from 'react';

import { useFetching } from '../../hooks/useFetching';
import { getPriceHistory } from '../../services/CryptService';
import { ICrypt } from '../../types/ICrypt';
import { IPriceHistoryResponse } from '../../types/IPriceHistory';
import { MyModal } from '../UI/Modal/MyModal';
import styles from './CryptInfo.module.scss';
import { useNavigate } from 'react-router-dom';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

interface CryptInfoProps {
  dataSource: ICrypt;
}

export const CryptInfo = ({ dataSource }: CryptInfoProps) => {
  const [period, setPeriod] = useState('m1');

  const { data, fetching: fetchData } = useFetching<IPriceHistoryResponse>({
    callback: () => getPriceHistory(dataSource.name.toLowerCase(), period),
  });

  const handlePeriodChange = (value: string) => {
    setPeriod(value);
  };

  useEffect(() => {
    fetchData();
  }, [period]);

  const chartData = {
    labels: data?.data.map((point) =>
      new Date(point.date).toLocaleDateString(),
    ),
    datasets: [
      {
        label: 'Price (USD)',
        data: data?.data.map((point) => point.priceUsd),
        borderColor: '#8884d8',
        fill: false,
      },
    ],
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [modalData, setModalData] = useState<ICrypt>();
  const showModal = (crypt: ICrypt) => {
    setIsModalVisible(true);
    setModalData(crypt);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/`);
  };

  const chartOptions = {
    maintainAspectRatio: false,
    scales: {
      y: {
        ticks: {
          beginAtZero: true,
          font: {
            size: 14,
          },
          color: '#333',
        },
        grid: {
          color: 'rgba(200,200,200,0.3)',
        },
      },
      x: {
        ticks: {
          font: {
            size: 14,
          },
          color: '#333',
        },
        grid: {
          color: 'rgba(200,200,200,0.3)',
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          font: {
            size: 16,
          },
          color: '#333',
        },
      },
    },
  };

  return (
    <>
      <div className={styles.info}>
        <img
          src={`https://assets.coincap.io/assets/icons/${dataSource.symbol.toLowerCase()}@2x.png`}
          alt="coin_logo"
          width="75px"
          height="75px"
        />
        <div>Name: {dataSource.name}</div>
        <div>Symbol: {dataSource.symbol}</div>
        <div>Rank: {dataSource.rank}</div>
        <div>
          Price (USD):
          {window.innerWidth > 420
            ? ' ' + dataSource.priceUsd
            : ' ' + Number(dataSource.priceUsd).toFixed(2)}
        </div>
        <div>
          Market Capitalization (USD):
          {window.innerWidth > 420
            ? ' ' + dataSource.marketCapUsd
            : ' ' + Number(dataSource.marketCapUsd).toFixed(2)}
        </div>
        <div>
          Max Supply:
          {dataSource.maxSupply
            ? window.innerWidth > 420
              ? ' ' + dataSource.maxSupply
              : ' ' + Number(dataSource.maxSupply).toFixed(2)
            : 'Not Found'}
        </div>
      </div>
      <div className={styles.addToPortfolio}>
        <div>
          <Button size="large" onClick={handleClick}>
            Back
          </Button>
        </div>
        <div>
          <Button
            size="large"
            type="primary"
            onClick={(e) => {
              e.stopPropagation();
              showModal(dataSource);
            }}
          >
            Add
          </Button>
        </div>
        <MyModal
          modalData={modalData}
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
      </div>
      <div className={styles.chartContainer}>
        <div>
          <Select
            placeholder="Select Interval..."
            onChange={handlePeriodChange}
          >
            <Select.Option value="m1">1 Day</Select.Option>
            <Select.Option value="h1">1 Month</Select.Option>
            <Select.Option value="d1">1 Year</Select.Option>
          </Select>
        </div>
        <div>
          <Line
            className={styles.graph}
            data={chartData}
            options={chartOptions}
          />
        </div>
      </div>
    </>
  );
};
