import { Dispatch, SetStateAction, useState } from 'react';
import { Pagination } from 'antd';

import styles from './PaginationBlock.module.scss';

interface PaginationProps {
  setLimit: Dispatch<SetStateAction<number>>;
  limit: number;
  setOffset: Dispatch<SetStateAction<number>>;
}
export const PaginationBlock = ({
  limit,
  setOffset,
  setLimit,
}: PaginationProps) => {
  const [pageNumber, setPageNumber] = useState(0);

  const handleSizeChange = (current: number, size: number) => {
    setLimit(size);
    setOffset((current - 1) * size);
    setPageNumber(current);
  };

  const handleChange = (current: number, size: number) => {
    setOffset((current - 1) * size);
    setPageNumber(current);
  };
  return (
    <div className={styles.paginationContainer}>
      <Pagination
        showSizeChanger
        pageSize={limit}
        onShowSizeChange={handleSizeChange}
        current={pageNumber}
        onChange={handleChange}
        total={2000}
      />
    </div>
  );
};
