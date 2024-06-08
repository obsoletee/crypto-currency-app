import { ReactElement } from 'react';

import styles from './Container.module.scss';

interface ContainerProps {
  children: ReactElement;
}

export const Container = ({ children }: ContainerProps) => {
  return <div className={styles.container}>{children}</div>;
};
