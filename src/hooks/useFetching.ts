import { useState } from 'react';

import { AxiosResponse } from 'axios';

interface UseFetchingProps<T> {
  callback: () => Promise<AxiosResponse<T>>;
}

interface UseFetchingResult<T> {
  fetching: () => Promise<void>;
  isPostLoading: boolean;
  error: string | null;
  data: T | null;
}

export const useFetching = <T>({
  callback,
}: UseFetchingProps<T>): UseFetchingResult<T> => {
  const [isPostLoading, setIsPostLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<T | null>(null);

  const fetching = async () => {
    try {
      setIsPostLoading(true);
      setError(null);
      const response = await callback();
      setData(response.data);
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setIsPostLoading(false);
    }
  };

  return { fetching, isPostLoading, error, data };
};
