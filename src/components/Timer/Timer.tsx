import { FC, useState, useRef, useEffect, Dispatch, SetStateAction } from 'react';
import { Colors } from '../../models/Colors';
import { PlayerClass } from '../../models/PlayerClass';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import './Timer.css';

interface TimerProps {
  currentPlayer: PlayerClass | null,
  restart: () => void,
  winner: string | null,
  setWinner: Dispatch<SetStateAction<string | null>>,
}

const Timer: FC<TimerProps> = ({ currentPlayer, restart, winner, setWinner }) => {
  const [whiteTime, setWhiteTime] = useState<number>(300);
  const [blackTime, setBlackTime] = useState<number>(300);
  const timer = useRef<null | ReturnType<typeof setInterval>>(null);

  const { values, handleChange, errors, isValid, setIsValid } = useFormAndValidation();

  useEffect(() => {
    startTimer();
  }, [currentPlayer, winner]);

  useEffect(() => {
    if (whiteTime === 0) setWinner(Colors.BLACK);
  }, [whiteTime]);

  useEffect(() => {
    if (blackTime === 0) setWinner(Colors.WHITE);
  }, [blackTime]);

  useEffect(() => {
    setIsValid(false);
  }, [])

  const decrementWhiteTimer = (): void  => {
    setWhiteTime(prev => prev - 1);
  }

  const decrementBlackTimer = (): void  => {
    setBlackTime(prev => prev - 1);
  }

  const startTimer = (): void  => {
    if (timer.current) clearInterval(timer.current);

    const callback = currentPlayer?.color === Colors.WHITE ? decrementWhiteTimer : decrementBlackTimer;

    timer.current = setInterval(callback, 1000);

    if (winner) clearInterval(timer.current);
  }

  const handleRestart = (): void  => {
    setWhiteTime(300);
    setBlackTime(300);
    setWinner(null);
    restart();
  }

  return (
    <div className='timer'>
      <form className='form-restart' noValidate>
        <input
          className='form-restart__input'
          name='time'
          type='number'
          min='10'
          required
          placeholder='Player time (sec)'
          value={values.time || ''}
          onChange={handleChange}
        />
        <span className={`form-restart__error ${!isValid ? 'form-restart__error_active' : ''}`}>
          {!isValid && errors.time}
        </span>
        <button
          className={`button-restart ${isValid ? '' : 'button-restart_disabled'}`}
          type='submit'
          onSubmit={handleRestart}
          disabled={!isValid}
        >
          Restart game
        </button>
      </form>
      <p className='timer__player'>
        {`White - ${whiteTime}`}
      </p>
      <p className='timer__player'>
        {`Black - ${blackTime}`}
      </p>
    </div>
  );
}

export default Timer;