import { Meta, StoryObj } from '@storybook/react';

import RegisterForm from './RegisterForm.tsx';

type Story = StoryObj<typeof RegisterForm>;

export const Default: Story = {};

const meta: Meta<typeof RegisterForm> = {
  component: RegisterForm,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
