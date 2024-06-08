import { ChangeEvent, ReactElement } from 'react';
import { Input } from 'antd';

interface SearchProps {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  searchQuery: string;
}

export const Search = ({
  handleChange,
  searchQuery,
}: SearchProps): ReactElement => {
  return (
    <div style={{ padding: '10px', width: '100%', overflow: 'hidden' }}>
      <Input
        value={searchQuery}
        onChange={handleChange}
        type="text"
        placeholder="Search..."
      ></Input>
    </div>
  );
};
