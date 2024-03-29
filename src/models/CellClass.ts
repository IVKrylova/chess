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

  isEmpty(): boolean {
    return this.figure === null;
  }

  isEnemy(target: CellClass): boolean {
    if (target.figure) {
      return this.figure?.color !== target.figure?.color;
    }

    return false;
  }

  isEmptyVertical(target: CellClass): boolean {
    if (this.x !== target.x) return false;

    const min = Math.min(this.y, target.y);
    const max = Math.max(this.y, target.y);
    for (let y = min + 1; y < max; y++) {
      if (!this.board.getCell(this.x, y).isEmpty()) return false;
    }

    return true;
  }

  isEmptyHorizontal(target: CellClass): boolean {
    if (this.y !== target.y) return false;

    const min = Math.min(this.x, target.x);
    const max = Math.max(this.x, target.x);
    for (let x = min + 1; x < max; x++) {
      if (!this.board.getCell(x, this.y).isEmpty()) return false;
    }

    return true;
  }

  isEmptyDiagonal(target: CellClass): boolean {
    const abcX = Math.abs(target.x - this.x);
    const abcY = Math.abs(target.y - this.y);
    const dy = this.y < target.y ? 1 : -1;
    const dx = this.x < target.x ? 1 : -1;

    if (abcX !== abcY) return false;
    for (let i = 1; i < abcY; i++) {
      if (!this.board.getCell(this.x + dx * i, this.y + dy * i).isEmpty()) return false;
    }

    return true;
  }

  setFigure(figure: Figure): void {
    this.figure = figure;
    this.figure.cell = this;
  }

  addLostFigure(figure: Figure): void {
    figure.color === Colors.WHITE
      ? this.board.lostWhiteFigures.push(figure)
      : this.board.lostBlackFigures.push(figure);
  }

  moveFigure(target: CellClass): void {
    if (this.figure && this.figure?.canMove(target)) {
      this.figure.moveFigure(target);
      if (target.figure) this.addLostFigure(target.figure);
      target.setFigure(this.figure);
      this.figure = null;
    }
  }
}