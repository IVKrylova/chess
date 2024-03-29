import logo from '../../images/black-king.png';
import { CellClass } from '../CellClass';
import { Colors } from '../Colors';

export enum FigureNames {
  FIGURE = 'Figure',
  KING = 'King',
  KNIGHT = 'Knight',
  PAWN = 'Pawn',
  QUEEN = 'Queen',
  ROOK = 'Rook',
  BISHOP = 'Bishop',
}

export class Figure {
  color: Colors;
  logo: typeof logo | null;
  cell: CellClass;
  name: FigureNames;
  id: number;

  constructor (color: Colors, cell: CellClass) {
    this.color = color;
    this.cell = cell;
    this.cell.figure = this;
    this.logo = null;
    this.name = FigureNames.FIGURE;
    this.id = Math.random();
  }

  canMove(target: CellClass): boolean {
    if (target.figure?.color === this.color) return false;
    if (target.figure?.name === FigureNames.KING) return false;

    return true;
  }

  moveFigure(target: CellClass) {}
}