import { Figure, FigureNames } from './Figure';
import { Colors } from '../Colors';
import { CellClass } from '../CellClass';
import blackLogo from '../../images/black-pawn.png';
import whiteLogo from '../../images/white-pawn.png';

export class Pawn extends Figure {
  constructor (color: Colors, cell: CellClass) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.PAWN;
  }

  isFirstStep: boolean = true;

  canMove(target: CellClass): boolean {
    if (!super.canMove(target)) return false;

    const direction = this.cell.figure?.color === Colors.BLACK ? 1 : -1;
    const firstDirection = this.cell.figure?.color === Colors.BLACK ? 2 : -2;

    if ((target.y === this.cell.y + direction || (this.isFirstStep && (target.y === this.cell.y + firstDirection)))
      && target.x === this.cell.x
      && this.cell.board.getCell(target.x, target.y).isEmpty())
      return true;

    if (target.y === this.cell.y + direction
      && (target.x === this.cell.x + 1 || target.x === this.cell.x - 1)
      && this.cell.isEnemy(target))
      return true;

    return false;
  }

  moveFigure(target: CellClass): void {
    super.moveFigure(target);
    this.isFirstStep = false;
  }
}