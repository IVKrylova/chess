import React, { FC } from 'react';
import { CellClass } from '../../models/CellClass';
import './Cell.css';

interface CellProps {
  cell: CellClass;
}

const Cell: FC<CellProps> = ({ cell }) => {
  return (
    <div className={`cell cell_${cell.color}`}>
      {cell.figure?.logo && <img src={cell.figure.logo} alt={cell.figure.name} className='cell__figure' />}
    </div>
  );
}

export default Cell;