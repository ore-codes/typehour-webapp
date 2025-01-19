import '@fontsource/rubik-spray-paint';
import '@/index.css';

import { MotionConfig } from 'motion/react';
import { FC } from 'react';

import GamePlay from '@/chunks/GamePlay/GamePlay.tsx';
import { ToastProvider } from '@/components/Toast/ToastContext.tsx';

const App: FC = () => {
  return (
    <MotionConfig transition={{ duration: 1 }}>
      <ToastProvider>
        <GamePlay />
      </ToastProvider>
    </MotionConfig>
  );
};

export default App;
