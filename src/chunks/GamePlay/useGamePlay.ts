import { KeyboardEventHandler, useCallback, useEffect, useMemo, useRef } from 'react';
import { io, Socket } from 'socket.io-client';

import { SERVER_URL } from '@/App.config.ts';
import { TrackProps } from '@/chunks/GamePlay/Track/Track.types.ts';
import { useToast } from '@/components/Toast/ToastContext.tsx';
import useRxState from '@/lib/store/useRxState.ts';

import { gamePlayService } from './GamePlay.service.ts';
import { ErrorPayload, GameStatus, SuccessPayload } from './GamePlay.types.ts';

export default function useGamePlay() {
  const toast = useToast();
  const gameState = useRxState(gamePlayService.gameStateStore.data$);
  const userPlayer = useRxState(gamePlayService.user$);
  const joinInputRef = useRef<HTMLInputElement>(null);
  const socketRef = useRef<Socket | null>(null);

  const status = useMemo<GameStatus>(() => {
    if (!gameState) return 'IDLE';
    return gameState.gameInProgress ? 'PLAYING' : 'WAITING';
  }, [gameState]);

  const trackPlayers = useMemo<TrackProps['players']>(() => {
    return gameState?.players.map((player) => ({
      id: player.id,
      relativePos: player.progress - userPlayer.progress,
    }));
  }, [gameState?.players, userPlayer]);

  useEffect(() => {
    gamePlayService.restart();
    const socket = io(SERVER_URL);
    socketRef.current = socket;

    socket.on('gameJoined', (data: SuccessPayload) => {
      toast('You are in');
      gamePlayService.update(data, true);
    });

    socket.on('gameStarted', (data: SuccessPayload) => {
      toast('Game has started', 'success');
      gamePlayService.update(data);
    });

    socket.on('playerJoined', (data: SuccessPayload) => {
      toast(`${data.gameState?.players.length} / 4 players joined`);
      gamePlayService.update(data);
    });

    socket.on('playerLeft', (data: SuccessPayload) => {
      toast(`${data.gameState?.players.length} / 4 players left`);
      gamePlayService.update(data);
    });

    socket.on('gameStateUpdated', (data: SuccessPayload) => {
      gamePlayService.update(data);
    });

    socket.on('gameLeft', (data: SuccessPayload) => {
      if (!userPlayer?.id || data.playerId === userPlayer.id) {
        gamePlayService.restart();
        window.location.reload();
      }
    });

    socket.on('error', (data: ErrorPayload) => {
      toast(data.message, 'error');
    });

    socket.on('gameEnded', () => {
      toast('Game ended', 'error');
    });

    return () => {
      socket.disconnect();
      socketRef.current = null;
    };
  }, [toast]);

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (status === 'PLAYING' && userPlayer) {
        const key = event.key[0].toUpperCase();
        socketRef.current?.emit('updateProgress', {
          playerId: userPlayer.id,
          typedText: userPlayer.typedText + key,
        });
      }
    },
    [status, userPlayer]
  );

  useEffect(() => {
    if (status === 'PLAYING') {
      window.addEventListener('keydown', handleKeyPress);
    } else {
      window.removeEventListener('keydown', handleKeyPress);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [status, handleKeyPress]);

  const handleCreate = useCallback(() => {
    socketRef.current?.emit('createGame', gamePlayService.newPlayerId);
  }, []);

  const handleQuit = useCallback(() => {
    gamePlayService.restart();
  }, []);

  const handleJoinInputKeyDown: KeyboardEventHandler<HTMLInputElement> = useCallback((event) => {
    if (event.key === 'Enter') {
      const gameId = joinInputRef.current?.value;
      if (gameId) {
        socketRef.current?.emit('joinGame', {
          gameId,
          playerId: gamePlayService.newPlayerId,
        });
      }
    }
  }, []);

  return {
    handleCreate,
    handleJoinInputKeyDown,
    handleQuit,
    joinInputRef,
    speed: userPlayer?.speed ?? 10,
    status,
    trackProps: {
      userPlayerId: userPlayer?.id,
      players: trackPlayers,
    } satisfies TrackProps,
  };
}
