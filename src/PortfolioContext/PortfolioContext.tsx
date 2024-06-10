import React, { createContext, useContext, ReactNode } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export interface PortfolioItem {
  id: string;
  symbol: string;
  price: string;
  count: number;
}

interface PortfolioContextType {
  portfolio: PortfolioItem[];
  addToPortfolio: (item: PortfolioItem) => void;
  removeFromPortfolio: (itemId: string) => void;
  clearPortfolio: () => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(
  undefined,
);

export const usePortfolioContext = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};

interface PortfolioProviderProps {
  children: ReactNode;
}

export const PortfolioProvider: React.FC<PortfolioProviderProps> = ({
  children,
}) => {
  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!
  const {
    storedValue: portfolio,
    setValue: setPortfolio,
    remove: clearPortfolioInStorage,
  } = useLocalStorage<PortfolioItem[]>({
    key: 'Portfolio',
    initialValue: [],
  });

  const addToPortfolio = (item: PortfolioItem) => {
    setPortfolio([...portfolio, item]);
  };

  const removeFromPortfolio = (itemId: string) => {
    setPortfolio(portfolio.filter((item) => item.id !== itemId));
  };

  const clearPortfolio = () => {
    clearPortfolioInStorage();
  };
  //commit !!!!!!!!!!!!
  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!
  //commit !!!!!!!!!!!!  //commit !!!!!!!!!!!!
  //commit !!!!!!!!!!!!

  //commit !!!!!!!!!!!!
  //commit !!!!!!!!!!!!
  //commit !!!!!!!!!!!!
  //commit !!!!!!!!!!!!
  //commit !!!!!!!!!!!!

  //commit !!!!!!!!!!!!
  //commit !!!!!!!!!!!!
  //commit !!!!!!!!!!!!
  //commit !!!!!!!!!!!!

  //commit !!!!!!!!!!!!
  //commit !!!!!!!!!!!!
  //commit !!!!!!!!!!!!
  //commit !!!!!!!!!!!!
  //commit !!!!!!!!!!!!
  //commit !!!!!!!!!!!!
  //commit !!!!!!!!!!!!

  return (
    <PortfolioContext.Provider
      value={{ portfolio, addToPortfolio, removeFromPortfolio, clearPortfolio }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};
