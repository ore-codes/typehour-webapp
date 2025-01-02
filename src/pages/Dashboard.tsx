import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@/components/Button/Button.tsx';
import { Page } from '@/constants/pages.ts';
import { authService } from '@/lib/auth/AuthService.ts';

const Dashboard: FC = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await authService.logout();
    navigate(Page.SignIn);
  };

  return <Button onClick={handleLogout}>Log out</Button>;
};

export default Dashboard;
