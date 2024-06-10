import { ReactElement } from 'react';

import styles from './Container.module.scss';
import { PortfolioProvider } from '../../../PortfolioContext/PortfolioContext';

interface ContainerProps {
  children: ReactElement;
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <PortfolioProvider>
      <div className={styles.container}>{children}</div>
    </PortfolioProvider>
  );
};
