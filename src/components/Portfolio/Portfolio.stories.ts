import { Portfolio } from './Portfolio';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Portfolio> = {
  title: 'Components/Portfolio',
  component: Portfolio,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Portfolio>;

export const Primary: Story = {};
