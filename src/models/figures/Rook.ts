import { Figure, FigureNames } from './Figure';
import { Colors } from '../Colors';
import { CellClass } from '../CellClass';
import blackLogo from '../../images/black-rook.png';
import whiteLogo from '../../images/white-rook.png';

export class Rook extends Figure {
  constructor (color: Colors, cell: CellClass) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.ROOK;
  }

  canMove(target: CellClass): boolean {
    if (!super.canMove(target)) return false;
    if (this.cell.isEmptyVertical(target)) return true;
    if (this.cell.isEmptyHorizontal(target)) return true;

    return false;
  }
}