import '@fontsource/rubik-spray-paint';
import '@/index.css';

import { motion, MotionConfig } from 'motion/react';
import { FC } from 'react';

import Car from '@/components/Car/Car.tsx';
import Road from '@/components/Road/Road.tsx';

const App: FC = () => {
  return (
    <MotionConfig transition={{ duration: 1 }}>
      <main className="relative mx-auto h-screen w-screen max-w-7xl overflow-hidden">
        <Road speed={100} />
        <div className="flex h-full flex-col">
          <h1 className="m-4 animate-pulse text-6xl">TypeHour</h1>
          <div className="mb-40 flex flex-1 items-end justify-center">
            <Car row={0} col={0} />
            <Car row={0} col={1} isUser />
            <Car row={1} col={0} />
            <Car row={1} col={1} />
          </div>
        </div>
        <motion.aside
          initial={{ opacity: 0, x: 900 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute right-8 top-24 flex h-48 w-[24rem] flex-col rounded-2xl bg-yellow-950/90 p-4"
        >
          <h1 className="text-center">Leaderboard</h1>
          <ol className="mt-4">
            <li className="flex justify-between">
              <span>Ore</span> <strong className="text-lime-300">287km</strong>
            </li>
          </ol>
        </motion.aside>
        <motion.footer
          initial={{ opacity: 0, y: 600 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-0 flex h-40 w-full flex-col items-center rounded-tr-full bg-yellow-950/90 p-4"
        >
          <p className="text-2xl text-neutral-500">Type the following text as fast as you can!</p>
          <p className="mt-4 text-5xl uppercase tracking-[0.3em]">
            <strong className="text-lime-300">The quick brown fox</strong> jumps over the lazy dog.
            The quick brown fox jumps over the lazy dog.
          </p>
        </motion.footer>
      </main>
    </MotionConfig>
  );
};

export default App;
