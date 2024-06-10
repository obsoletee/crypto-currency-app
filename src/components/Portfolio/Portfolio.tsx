import { Button, Card } from 'antd';
import { useEffect, useMemo, useState } from 'react';

export const Portfolio = () => {
  const [localStorageData, setLocalStorageData] = useState([]);
  useEffect(() => {
    for (let i = 0; i < localStorage.length; i += 1) {
      setLocalStorageData(localStorage.getItem(localStorage.key(i)));
    }
    console.log(localStorageData);
    // if (savedData) {
    //   setData(JSON.parse(savedData));
    // }
  }, [localStorage]);
  return (
    <>
      <Card title="Portfolio" hoverable>
        <div>Total Price:</div>
        <Button
          type="primary"
          onClick={() => {
            localStorage.clear();
          }}
        >
          Clear Portfolio
        </Button>
      </Card>
    </>
  );
};
