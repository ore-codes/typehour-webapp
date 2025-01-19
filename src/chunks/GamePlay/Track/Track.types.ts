export type TrackPlayer = {
  id: string;
  relativePos: number;
};

export type TrackProps = {
  players: TrackPlayer[];
  userPlayerId: string;
};
