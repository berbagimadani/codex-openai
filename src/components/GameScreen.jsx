import React, { useEffect, useRef } from 'react';
import { CountObjectsGame } from '../game/CountObjectsGame';

export default function GameScreen({ lesson, onExit }) {
  const gameRef = useRef(null);

  useEffect(() => {
    const game = new CountObjectsGame(gameRef.current, lesson.gameContent);
    return () => {
      game.destroy();
    };
  }, [lesson]);

  return (
    <div>
      <button onClick={onExit} className="mb-2 text-blue-500">Back</button>
      <div ref={gameRef} />
    </div>
  );
}
