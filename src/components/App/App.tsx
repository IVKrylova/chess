import React, { useEffect, useState } from 'react';
import { BoardClass } from '../../models/BoardClass';
import { Colors } from '../../models/Colors';
import { PlayerClass } from '../../models/PlayerClass';
import Board from '../Board/Board';
import GameState from '../GameState/GameState';
import './App.css';

const App = () => {
  const [board, setBoard] = useState(new BoardClass());
  const [whitePlayer, setWhitePlayer] = useState(new PlayerClass(Colors.WHITE));
  const [blackPlayer, setBlackPlayer] = useState(new PlayerClass(Colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<PlayerClass | null>(null);

  useEffect(() => {
    restart();
  }, []);

  const restart = (): void => {
    const newBoard = new BoardClass();

    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
    setCurrentPlayer(whitePlayer);
  }

  const swapPlayer = (): void => {
    setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer);
  }

  return (
    <div className='app'>
      <h1 className='main-title'>Chess Game</h1>
      <Board
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
      />
      <GameState
        currentPlayer={currentPlayer}
        board={board}
        restart={restart}
      />
    </div>
  );
}

export default App;
