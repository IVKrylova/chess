import { CellClass } from './CellClass';
import { Colors } from './Colors';
import { Bishop } from './figures/Bishop';
import { King } from './figures/King';
import { Knight } from './figures/Knight';
import { Pawn } from './figures/Pawn';
import { Queen } from './figures/Queen';
import { Rook } from './figures/Rook';
import { Figure } from './figures/Figure';

export class BoardClass {
  cells: CellClass[][] = [];
  lostWhiteFigures: Figure[] = [];
  lostBlackFigures: Figure[] = [];

  public initCells(): void {
    for (let i = 0; i < 8; i++) {
      const row: CellClass[] = [];

      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 !== 0) {
          row.push(new CellClass(this, j, i, Colors.BLACK, null));
        } else {
          row.push(new CellClass(this, j, i, Colors.WHITE, null));
        }
      }

      this.cells.push(row);
    }
  }

  public getCell(x: number, y: number): CellClass {
    return this.cells[y][x];
  }

  private addBishops(): void {
    new Bishop(Colors.BLACK, this.getCell(2, 0));
    new Bishop(Colors.BLACK, this.getCell(5, 0));
    new Bishop(Colors.WHITE, this.getCell(2, 7));
    new Bishop(Colors.WHITE, this.getCell(5, 7));
  }

  private addKings(): void {
    new King(Colors.BLACK, this.getCell(4, 0));
    new King(Colors.WHITE, this.getCell(4, 7));
  }

  private addKnights(): void {
    new Knight(Colors.BLACK, this.getCell(1, 0));
    new Knight(Colors.BLACK, this.getCell(6, 0));
    new Knight(Colors.WHITE, this.getCell(1, 7));
    new Knight(Colors.WHITE, this.getCell(6, 7));
  }

  private addPawns(): void {
    for (let i = 0; i < 8; i++) {
      new Pawn(Colors.BLACK, this.getCell(i, 1));
      new Pawn(Colors.WHITE, this.getCell(i, 6));
    }
  }

  private addQueens(): void {
    new Queen(Colors.BLACK, this.getCell(3, 0));
    new Queen(Colors.WHITE, this.getCell(3, 7));
  }

  private addRooks(): void {
    new Rook(Colors.BLACK, this.getCell(0, 0));
    new Rook(Colors.BLACK, this.getCell(7, 0));
    new Rook(Colors.WHITE, this.getCell(0, 7));
    new Rook(Colors.WHITE, this.getCell(7, 7));
  }

  public addFigures(): void {
    this.addBishops();
    this.addKings();
    this.addKnights();
    this.addPawns();
    this.addQueens();
    this.addRooks();
  }

  public highlightCells(selectedCell: CellClass | null): void {
    for (let i = 0; i < this.cells.length; i++) {
      const row = this.cells[i];

      for (let j = 0; j < row.length; j++) {
        const target = row[j];

        target.available = !!selectedCell?.figure?.canMove(target);
      }
    }
  }

  public getCopyBoard(): BoardClass {
    const newBoard = new BoardClass();
    newBoard.cells = this.cells;
    newBoard.lostWhiteFigures = this.lostWhiteFigures;
    newBoard.lostBlackFigures = this.lostBlackFigures;

    return newBoard;
  }
}