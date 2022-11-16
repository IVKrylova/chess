import React, { FC, useEffect, useState } from 'react';
import { BoardClass } from '../../models/BoardClass';
import { CellClass } from '../../models/CellClass';
import Cell from '../Cell/Cell';
import './Board.css';

interface BoardProps {
  board: BoardClass,
  setBoard: (board: BoardClass) => void,
}

const Board: FC<BoardProps> = ({ board, setBoard }) => {
  const [selectedCell, setSelectedCell] = useState<CellClass | null>(null);

  const click = (cell: CellClass) => {
    if (cell.figure) {
      setSelectedCell(cell);
    }
  }

  const updateBoard = () => {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  }

  const highlightCells = () => {
    board.highlightCells(selectedCell);
    updateBoard();
  }

  useEffect(() => {
    highlightCells();
  }, [selectedCell]);

  return (
    <div className='board'>
      {board.cells.map((row, index) =>
        <React.Fragment key={index}>
          <>
            {row.map(cell =>
              <Cell
                cell={cell}
                key={cell.id}
                selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                click={click}
              />
            )}
          </>
        </React.Fragment>
      )}
    </div>
  );
}

export default Board;