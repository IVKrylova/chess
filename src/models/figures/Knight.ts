import { Figure, FigureNames } from './Figure';
import { Colors } from '../Colors';
import { CellClass } from '../CellClass';
import blackLogo from '../../images/black-knight.png';
import whiteLogo from '../../images/white-knight.png';

export class Knight extends Figure {
  constructor (color: Colors, cell: CellClass) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.KNIGHT;
  }

  canMove(target: CellClass): boolean {
    if (!super.canMove(target)) return false;

    const dx = Math.abs(this.cell.x - target.x);
    const dy = Math.abs(this.cell.y - target.y);

    return (dx === 1 && dy === 2) || (dx === 2 && dy === 1);
  }
}