import { FC } from 'react';
import './Coordinates.css';

interface CoordinatesProps {
  coordinates: number[] | string[],
  classModifier: string,
}

const Coordinates: FC<CoordinatesProps> = ({ coordinates, classModifier }) => {
  return (
    <ul className={`coordinates ${classModifier}`}>
      {coordinates.map(el => <li className='coordinate'>{el}</li>)}
    </ul>
  );
}

export default Coordinates;