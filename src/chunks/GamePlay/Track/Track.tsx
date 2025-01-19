import { motion } from 'motion/react';
import { FC } from 'react';

import { containerVariants } from '@/chunks/GamePlay/GamePlay.config.ts';
import { TrackProps } from '@/chunks/GamePlay/Track/Track.types.ts';
import Car from '@/components/Car/Car.tsx';

const Track: FC<TrackProps> = (props) => {
  return (
    <motion.div
      key="playing"
      className="absolute bottom-0 grid grid-cols-4 items-end gap-4"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {props.players.map((player, index) => (
        <Car
          key={player.id}
          row={index % 2}
          col={index % 3}
          relativePos={player.relativePos}
          isUser={player.id === props.userPlayerId}
        />
      ))}
    </motion.div>
  );
};

export default Track;
