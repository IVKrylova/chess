import { BoardClass } from './BoardClass';
import { Colors } from './Colors';
import { FigureClass } from './figures/FigureClass';

export class CellClass {
  readonly x: number;
  readonly y: number;
  readonly color: Colors;
  figure: FigureClass | null;
  board: BoardClass;
  available: boolean;
  id: number;

  constructor (board: BoardClass, x: number, y: number, color: Colors, figure: FigureClass | null) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.figure = figure;
    this.board = board;
    this.available = false;
    this.id = Math.random();
  }
}