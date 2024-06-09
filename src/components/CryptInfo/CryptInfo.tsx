import { Button, Input } from 'antd';
import { ICrypt } from '../../types/ICrypt';
import styles from './CryptInfo.module.scss';

interface CryptInfoProps {
  dataSource: ICrypt;
}

export const CryptInfo = ({ dataSource }: CryptInfoProps) => {
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
        <div>Price (USD): {dataSource.priceUsd}</div>
        <div>Market Capitalization (USD): {dataSource.marketCapUsd}</div>
        <div>
          Max Supply:{' '}
          {dataSource.maxSupply ? dataSource.maxSupply : 'Not Found'}
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
        <div>
          <label htmlFor="startDate-select">Start Date: </label>
          <Select
            options={[
              { value: '1', label: '1 Day' },
              { value: '7', label: '7 Days' },
              { value: '30', label: '1 Month' },
            ]}
            value={selectedDaysAgo.toString()}
            onChange={(value) => {
              const daysAgo = Number(value);
              setSelectedDaysAgo(daysAgo);
              setStartDate(getUnixTimeForDaysAgo(daysAgo));
            }}
          />
        </div>
        <div>
          <CryptHistoryChart
            id={`${id}`}
            interval={interval}
            start={startDate}
            end={endTime}
          />
        </div>
      </div>
    </>
  );
};
