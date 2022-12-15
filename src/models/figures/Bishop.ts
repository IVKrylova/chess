import { Figure, FigureNames } from './Figure';
import { Colors } from '../Colors';
import { CellClass } from '../CellClass';
import blackLogo from '../../images/black-bishop.png';
import whiteLogo from '../../images/white-bishop.png';

export class Bishop extends Figure {
  constructor (color: Colors, cell: CellClass) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.BISHOP;
  }

  canMove(target: CellClass): boolean {
    if (!super.canMove(target)) return false;

    return true;
  }
}