import React, { useEffect, useState } from 'react';
import { BoardClass } from '../../models/BoardClass';
import Board from '../Board/Board';
import './App.css';

const App = () => {
  const [board, setBoard] = useState(new BoardClass);

  const restart = () =>{
    const newBoard = new BoardClass();

    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  }

  useEffect(() => {
    restart();
  }, []);

  return (
    <div className='app'>
      <Board
        board={board}
        setBoard={setBoard}
      />
    </div>
  );
}

export default App;
