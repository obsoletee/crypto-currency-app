import { useState, MouseEvent } from 'react';
import { Card } from 'antd';

import {
  PortfolioItem,
  usePortfolioContext,
} from '../../PortfolioContext/PortfolioContext';
import { ModalPortfolio } from '../UI/Modal/ModalPortfolio/ModalPortfolio';
import { ICrypt } from '../../types/ICrypt';

interface PortfolioProps {
  cryptData?: ICrypt[];
}
export const Portfolio = ({ cryptData }: PortfolioProps) => {
  const { portfolio, removeFromPortfolio } = usePortfolioContext();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsModalVisible(true);
  };

  const getTotalPrice = (): string => {
    let totalPrice: number = 0;

    portfolio.forEach((crypt: PortfolioItem) => {
      totalPrice += Number(crypt.price) * crypt.count;
    });

    return totalPrice.toFixed(2);
  };

  const getTotalChange = () => {
    let currentPrice = 0;
    const totalPrice = getTotalPrice();

    const symbolsList = portfolio.map((el) => el.symbol);

    if (symbolsList.length === 0) {
      return 0;
    }
    cryptData?.forEach((crypt) => {
      if (symbolsList.includes(crypt.symbol)) {
        currentPrice +=
          Number(crypt.priceUsd) *
          portfolio.at(portfolio.findIndex((el) => el.symbol === crypt.symbol))!
            .count;
      }
    });
    const totalChange = Math.abs((1 - Number(totalPrice) / currentPrice) * 100);
    return Number(totalChange.toFixed(2));
  };

  return (
    <>
      <Card title="Portfolio" hoverable onClick={handleClick}>
        <div>Total Price: {getTotalPrice()}</div>
        {getTotalChange() > 0 ? (
          <div style={{ color: 'red' }}>Change: -{getTotalChange()}%</div>
        ) : (
          <div style={{ color: 'green' }}>Change: +{getTotalChange()}%</div>
        )}
        <ModalPortfolio
          portfolio={portfolio}
          removeFromPortfolio={removeFromPortfolio}
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
      </Card>
    </>
  );
};
