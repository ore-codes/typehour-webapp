import '@fontsource-variable/inter';
import '@/index.css';

import { MotionConfig } from 'motion/react';
import { SnackbarProvider } from 'notistack';
import { FC, useEffect, useState } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { Subscription } from 'rxjs';

import AppLogo from '@/components/AppLogo/AppLogo.tsx';
import { Page } from '@/constants/pages.ts';
import { authService } from '@/lib/auth/AuthService.ts';
import Dashboard from '@/pages/Dashboard.tsx';
import SignIn from '@/pages/SignIn.tsx';
import SignUp from '@/pages/SignUp.tsx';

const App: FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const subscription: Subscription = authService.isAuthenticated$.subscribe(setIsAuthenticated);
    return () => subscription.unsubscribe();
  }, []);

  if (isAuthenticated !== undefined) {
    return (
      <main className="grid h-screen w-screen place-items-center">
        <AppLogo className="!text-5xl" />
      </main>
    );
  }

  const ProtectedRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to={Page.SignIn} />;
  };

  const OnboardingRoute = ({ element }) => {
    return isAuthenticated ? <Navigate to={Page.Dashboard} /> : element;
  };

  return (
    <MotionConfig transition={{ duration: 0.5 }}>
      <SnackbarProvider anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
        <Router>
          <Routes>
            <Route index element={<OnboardingRoute element={<SignIn />} />} />
            <Route path={Page.SignUp} element={<SignUp />} />
            <Route path={Page.Dashboard} element={<ProtectedRoute element={<Dashboard />} />} />
          </Routes>
        </Router>
      </SnackbarProvider>
    </MotionConfig>
  );
};

export default App;
