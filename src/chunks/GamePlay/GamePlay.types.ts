export type SuccessPayload = Partial<{
  gameId: string;
  player: Player;
  gameState: GameState;
  playerId?: string;
}>;

export type ErrorPayload = {
  message: string;
};

export type GameId = string;

export type Player = {
  id: string;
  progress: number;
  speed: number;
  typedText: string;
  paragraph: string;
};

export type GameState = {
  players: Player[];
  gameInProgress: boolean;
  startTime: number;
};

export type GameStatus = 'IDLE' | 'WAITING' | 'PLAYING';
