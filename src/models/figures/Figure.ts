import logo from '../../images/black-king.png';
import { CellClass } from '../CellClass';
import { Colors } from '../Colors';

export enum FigureNames {
  FIGURE = 'Фигура',
  KING = 'Король',
  KNIGHT = 'Конь',
  PAWN = 'Пешка',
  QUEEN = 'Ферзь',
  ROOK = 'Ладья',
  BISHOP = 'Слон',
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
    return true;
  }

  moveFigure(target: CellClass) {}
}