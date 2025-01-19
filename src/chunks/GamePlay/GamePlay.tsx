import { motion } from 'motion/react';
import { FC } from 'react';

import IdleGame from '@/chunks/GamePlay/IdleGame/IdleGame.tsx';
import Track from '@/chunks/GamePlay/Track/Track.tsx';
import useGamePlay from '@/chunks/GamePlay/useGamePlay.ts';
import WaitingGame from '@/chunks/GamePlay/WaitingGame/WaitingGame.tsx';
import Scoreboard from '@/chunks/Scoreboard/Scoreboard.tsx';
import TypingArea from '@/chunks/TypingArea/TyingArea.tsx';
import Road from '@/components/Road/Road.tsx';

const GamePlay: FC = () => {
  const gamePlay = useGamePlay();
  return (
    <main className="relative mx-auto h-screen w-screen max-w-7xl overflow-hidden">
      <Road speed={gamePlay.speed} />
      <div className="flex h-full flex-col">
        <h1 className="m-4 animate-pulse text-6xl">TypeHour</h1>
        {gamePlay.status !== 'IDLE' && (
          <button
            className="z-50 mr-8 self-center rounded-full bg-white px-2 text-red-400"
            onClick={gamePlay.handleQuit}
          >
            Quit
          </button>
        )}
        <motion.div
          className="relative mb-40 flex flex-1 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {gamePlay.status === 'IDLE' && (
            <IdleGame
              ref={gamePlay.joinInputRef}
              onCreate={gamePlay.handleCreate}
              onInputKeyPress={gamePlay.handleJoinInputKeyDown}
            />
          )}
          {gamePlay.status === 'WAITING' && <WaitingGame />}
          {gamePlay.status === 'PLAYING' && <Track {...gamePlay.trackProps} />}
        </motion.div>
      </div>
      <Scoreboard />
      <TypingArea />
    </main>
  );
};

export default GamePlay;
