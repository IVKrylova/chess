import { Figure, FigureNames } from './Figure';
import { Colors } from '../Colors';
import { CellClass } from '../CellClass';
import blackLogo from '../../images/black-king.png';
import whiteLogo from '../../images/white-king.png';

export class King extends Figure {
  constructor (color: Colors, cell: CellClass) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.KING;
  }

  canMove(target: CellClass): boolean {
    if (!super.canMove(target)) return false;

    const dx = Math.abs(this.cell.x - target.x);
    const dy = Math.abs(this.cell.y - target.y);

    return (dx === 1 && dy === 0) || (dx === 0 && dy === 1) || (dx === 1 && dy === 1);
  }
}