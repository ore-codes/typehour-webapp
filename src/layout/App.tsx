import '@fontsource-variable/inter';
import '@/index.css';

import { MotionConfig } from 'motion/react';
import { SnackbarProvider } from 'notistack';
import { FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Page } from '@/pages/constant.ts';
import SignIn from '@/pages/SignIn.tsx';
import SignUp from '@/pages/SignUp.tsx';

const App: FC = () => {
  return (
    <MotionConfig transition={{ duration: 0.5 }}>
      <SnackbarProvider anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
        <Router>
          <Routes>
            <Route index element={<SignIn />} />
            <Route path={Page.SignUp} element={<SignUp />} />
          </Routes>
        </Router>
      </SnackbarProvider>
    </MotionConfig>
  );
};

export default App;
