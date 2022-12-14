import { BoardClass } from './BoardClass';
import { Colors } from './Colors';
import { Figure } from './figures/Figure';

export class CellClass {
  readonly x: number;
  readonly y: number;
  readonly color: Colors;
  figure: Figure | null;
  board: BoardClass;
  available: boolean;
  id: number;

  constructor (board: BoardClass, x: number, y: number, color: Colors, figure: Figure | null) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.figure = figure;
    this.board = board;
    this.available = false;
    this.id = Math.random();
  }

  moveFigure(target: CellClass) {
    if (this.figure && this.figure?.canMove(target)) {
      this.figure.moveFigure(target);
      target.figure = this.figure;
      this.figure = null;
    }
  }
}