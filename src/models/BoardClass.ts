import { CellClass } from './CellClass';
import { Colors } from './Colors';

export class BoardClass {
  cells: CellClass[][] = [];

  public initCells() {
    for (let i = 0; i < 8; i++) {
      const row: CellClass[] = [];

      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 !== 0) {
          row.push(new CellClass(this, i, j, Colors.BLACK, null));
        } else {
          row.push(new CellClass(this, i, j, Colors.WHITE, null));
        }
      }

      this.cells.push(row);
    }
  }
}