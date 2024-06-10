import { CryptInfo } from './CryptInfo';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CryptInfo> = {
  title: 'Components/CryptInfo',
  component: CryptInfo,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CryptInfo>;

export const Primary: Story = {
  args: {
    dataSource: {
      id: 'bitcoin',
      rank: '1',
      symbol: 'BTC',
      name: 'Bitcoin',
      supply: '19710168.0000000000000000',
      maxSupply: '21000000.0000000000000000',
      marketCapUsd: '1374745089952.7868367091561160',
      volumeUsd24Hr: '3285944161.8015064941825068',
      priceUsd: '69748.0148293402083995',
      changePercent24Hr: '0.5834709553387863',
      vwap24Hr: '69649.7825291169744590',
      explorer: 'https://blockchain.info/',
    },
  },
};
