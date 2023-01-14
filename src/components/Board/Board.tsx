import React, { FC, useEffect, useState } from 'react';
import { BoardClass } from '../../models/BoardClass';
import { CellClass } from '../../models/CellClass';
import { PlayerClass } from '../../models/PlayerClass';
import Cell from '../Cell/Cell';
import './Board.css';

interface BoardProps {
  board: BoardClass,
  setBoard: (board: BoardClass) => void,
  currentPlayer: PlayerClass | null,
  swapPlayer: () => void,
}

const Board: FC<BoardProps> = ({ board, setBoard, currentPlayer, swapPlayer }) => {
  const [selectedCell, setSelectedCell] = useState<CellClass | null>(null);

  const click = (cell: CellClass): void => {
    if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
      selectedCell.moveFigure(cell);
      swapPlayer();
      setSelectedCell(null);
    } else {
      if (cell.figure?.color === currentPlayer?.color) setSelectedCell(cell);
    }
  }

  const updateBoard = (): void  => {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  }

  const highlightCells = (): void  => {
    board.highlightCells(selectedCell);
    updateBoard();
  }

  useEffect(() => {
    highlightCells();
  }, [selectedCell]);

  return (
    <section className='board'>
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
    </section>
  );
}

export default Board;