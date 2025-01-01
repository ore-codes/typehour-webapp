import { Meta, StoryObj } from '@storybook/react';

import LoginForm from './LoginForm.tsx';

type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {};

const meta: Meta<typeof LoginForm> = {
  component: LoginForm,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
