import { Figure, FigureNames } from './Figure';
import { Colors } from '../Colors';
import { CellClass } from '../CellClass';
import blackLogo from '../../images/black-queen.png';
import whiteLogo from '../../images/white-queen.png';

export class Queen extends Figure {
  constructor (color: Colors, cell: CellClass) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.QUEEN;
  }
}