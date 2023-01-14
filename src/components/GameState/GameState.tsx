import { FC } from 'react';
import { BoardClass } from '../../models/BoardClass';
import { PlayerClass } from '../../models/PlayerClass';
import LostFigures from '../LostFigures/LostFigures';
import Timer from '../Timer/Timer';
import './GameState.css';

interface GameStateProps {
  currentPlayer: PlayerClass | null,
  restart: () => void,
  board: BoardClass,
}

const GameState: FC<GameStateProps> = ({ currentPlayer, restart, board }) => {
  return (
    <section className='game-state'>
      <p className='current-player'>Current player {currentPlayer?.color}</p>
      <Timer
        restart={restart}
        currentPlayer={currentPlayer}
      />
      <ul className='block-lost-figures'>
        <LostFigures
          title='White figures'
          figures={board.lostWhiteFigures}
        />
        <LostFigures
          title='Black figures'
          figures={board.lostBlackFigures}
        />
      </ul>
    </section>
  );
}

export default GameState;