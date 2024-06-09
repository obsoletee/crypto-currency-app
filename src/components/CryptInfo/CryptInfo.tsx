import { useEffect, useState } from 'react';
import { Button, Input, Select } from 'antd';
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  CartesianGrid,
} from 'recharts';

import { ICrypt, ICryptResponse } from '../../types/ICrypt';
import styles from './CryptInfo.module.scss';
import { useFetching } from '../../hooks/useFetching';
import { getAllData, getPriceHistory } from '../../services/CryptService';

interface CryptInfoProps {
  dataSource: ICrypt;
}

export const CryptInfo = ({ dataSource }: CryptInfoProps) => {
  const [period, setPeriod] = useState('1d');

  const { data, fetching: fetchData } = useFetching<ICryptResponse>({
    callback: () => getPriceHistory(dataSource.name.toLowerCase(), period),
  });

  const [chartData, setChartData] = useState(data?.data);

  const handlePeriodChange = (value: string) => {
    setPeriod(value);
  };

  const formatTimestamp = (timestamp: number) => {
    const date = new Date(timestamp);
    return `${date.getUTCDate()}/${date.getUTCMonth() + 1}/${date.getUTCFullYear()}`;
  };

  useEffect(() => {
    fetchData();
  }, [period]);

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
          Price (USD):{' '}
          {window.innerWidth > 420
            ? dataSource.priceUsd
            : Number(dataSource.priceUsd).toFixed(2)}
        </div>
        <div>
          Market Capitalization (USD):{' '}
          {window.innerWidth > 420
            ? dataSource.marketCapUsd
            : Number(dataSource.marketCapUsd).toFixed(2)}
        </div>
        <div>
          Max Supply:{' '}
          {dataSource.maxSupply
            ? window.innerWidth > 420
              ? dataSource.maxSupply
              : Number(dataSource.maxSupply).toFixed(2)
            : 'Not Found'}
        </div>
        <Button size="large" href="/">
          Back
        </Button>
      </div>
      <div className={styles.addToPortfolio}>
        <div>
          <Input type="number" value={1}></Input>
        </div>
        <div>
          <Button>Add</Button>
        </div>
      </div>
      <div className={styles.chartContainer}>
        <Select
          defaultValue="1d"
          style={{ width: 120 }}
          onChange={handlePeriodChange}
        >
          <option value="1d">1 Day</option>
          <option value="7d">7 Days</option>
          <option value="30d">30 Days</option>
        </Select>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={chartData?.map((point) => ({
              ...point,
              time: formatTimestamp(point.time),
            }))}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="priceUsd"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};
