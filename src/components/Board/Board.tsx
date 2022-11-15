import React, { FC } from 'react';
import { BoardClass } from '../../models/BoardClass';
import Cell from '../Cell/Cell';
import './Board.css';

interface BoardProps {
  board: BoardClass,
  setBoard: (board: BoardClass) => void,
}

const Board: FC<BoardProps> = ({ board, setBoard }) => {
  return (
    <div className='board'>
      {board.cells.map((row, index) =>
        <React.Fragment key={index}>
          <>
            {row.map(cell =>
              <Cell
                cell={cell}
                key={cell.id}
              />
            )}
          </>
        </React.Fragment>
      )}
    </div>
  );
}

export default Board;