import axios, { AxiosResponse } from 'axios';
import { ICryptResponse } from '../types/ICrypt';

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
