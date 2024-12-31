import '@fontsource-variable/inter';
import '@/index.css';

import { SnackbarProvider } from 'notistack';
import { FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Landing from '@/pages/landing';

const App: FC = () => {
  return (
    <SnackbarProvider anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
      <Router>
        <Routes>
          <Route index element={<Landing />} />
        </Routes>
      </Router>
    </SnackbarProvider>
  );
};

export default App;
