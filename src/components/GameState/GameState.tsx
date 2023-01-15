import { Dispatch, FC, SetStateAction } from 'react';
import { BoardClass } from '../../models/BoardClass';
import { PlayerClass } from '../../models/PlayerClass';
import LostFigures from '../LostFigures/LostFigures';
import Timer from '../Timer/Timer';
import './GameState.css';

interface GameStateProps {
  currentPlayer: PlayerClass | null,
  restart: () => void,
  board: BoardClass,
  winner: string | null,
  setWinner: Dispatch<SetStateAction<string | null>>,
}

const GameState: FC<GameStateProps> = ({ currentPlayer, restart, board, winner, setWinner }) => {
  return (
    <section className='game-state'>
      <p className={`victory-message ${winner ? 'victory-message_visible' : ''}`}>
        Winner is <span className='victory-message_winner'>{winner}</span>
      </p>
      <p className={`current-player ${winner ? 'current-player_hidden' : ''}`}>
        Current player is <span className='current-player__player'>{currentPlayer?.color}</span>
      </p>
      <Timer
        restart={restart}
        currentPlayer={currentPlayer}
        winner={winner}
        setWinner={setWinner}
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