import { CryptTable } from './CryptTable';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CryptTable> = {
  title: 'Components/CryptTable',
  component: CryptTable,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CryptTable>;

export const Primary: Story = {
  args: {},
};
