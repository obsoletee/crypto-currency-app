import { Button, Result } from 'antd';

export const NotFoundPage = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button href="/" type="primary">
          Back Home
        </Button>
      }
    />
  );
};
