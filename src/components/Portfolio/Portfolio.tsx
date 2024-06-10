import { Button, Card } from 'antd';

export const Portfolio = () => {
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
