import { FC } from 'react';
import { Figure } from '../../models/figures/Figure';
import './LostFigures.css';

interface LostFiguresProps {
  title: string,
  figures: Figure[],
}

const LostFigures: FC<LostFiguresProps> = ({ title, figures }) => {
  return (
    <div className='lost-figures'>
      <h2 className='lost-figures__title'>{title}</h2>
      <ul className='lost-figures__list'>
        {figures.map(figure => {
          return (
            <li className='lost-figure' key={figure.id}>
              <p className='lost-figure__name'>{figure.name}</p>
              {figure.logo && <img src={figure.logo} className='lost-figure__img' alt={`figure ${figure.name}`} />}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default LostFigures;