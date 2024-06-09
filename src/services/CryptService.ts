import axios, { AxiosResponse } from 'axios';
import { ICryptResponse } from '../types/ICrypt';
import { IPriceHistoryResponse } from '../types/IPriceHistory';

export const getAllData = async (
  limit?: number,
  offset?: number,
  search?: string,
): Promise<AxiosResponse<ICryptResponse>> => {
  const response = await axios.get<ICryptResponse>(
    'https://api.coincap.io/v2/assets',
    {
      params: {
        limit,
        offset,
        search,
      },
    },
  );
  return response;
};

export const getPriceHistory = async (id: string, interval: string) => {
  const response = await axios.get<IPriceHistoryResponse>(
    `https://api.coincap.io/v2/assets/${id}/history`,
    {
      params: {
        interval,
      },
    },
  );
  return response;
};
