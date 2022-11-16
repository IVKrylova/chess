import React, { FC } from 'react';
import { CellClass } from '../../models/CellClass';
import './Cell.css';

interface CellProps {
  cell: CellClass;
  selected: boolean;
  click: (cell: CellClass) => void;
}

const Cell: FC<CellProps> = ({ cell, selected, click }) => {
  const cellClass = `cell cell_${cell.color} cell_${selected ? 'selected' : ''} ${cell.available && cell.figure ? 'cell_available' : ''}`

  return (
    <div className={cellClass} onClick={() => click(cell)}>
      {cell.figure?.logo && <img src={cell.figure.logo} alt={cell.figure.name} className='cell__figure' />}
      {cell.available && !cell.figure && <div className='cell__available-cell'></div>}
    </div>
  );
}

export default Cell;