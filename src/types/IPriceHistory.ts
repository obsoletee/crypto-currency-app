export interface IPriceHistory {
  priceUsd: string;
  time: number;
  circulatingSupply: string;
  date: string;
}

export interface IPriceHistoryResponse {
  data: IPriceHistory[];
  timestamp: number;
}
