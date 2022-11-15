import React, { FC } from 'react';
import { CellClass } from '../../models/CellClass';
import './Cell.css';

interface CellProps {
  cell: CellClass;
}

const Cell: FC<CellProps> = ({ cell }) => {
  return (
    <div className={`cell cell_${cell.color}`}>

    </div>
  );
}

export default Cell;