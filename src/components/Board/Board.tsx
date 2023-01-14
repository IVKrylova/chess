import React, { FC, useEffect, useState } from 'react';
import { BoardClass } from '../../models/BoardClass';
import { CellClass } from '../../models/CellClass';
import { PlayerClass } from '../../models/PlayerClass';
import Coordinates from '../Coordinates/Coordinates';
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

  const highlightCells = (): void => {
    board.highlightCells(selectedCell);
    updateBoard();
  }

  useEffect(() => {
    highlightCells();
  }, [selectedCell]);

  return (
    <section className='section-board'>
      <Coordinates
        coordinates={['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']}
        classModifier='coordinates_x-top'
      />
      <ul className='board'>
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
      </ul>
      <Coordinates
        coordinates={['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']}
        classModifier='coordinates_x-bottom'
      />
      <Coordinates
        coordinates={[1, 2, 3, 4, 5, 6, 7, 8]}
        classModifier='coordinates_y-left'
      />
      <Coordinates
        coordinates={[1, 2, 3, 4, 5, 6, 7, 8]}
        classModifier='coordinates_y-right'
      />
    </section>
  );
}

export default Board;