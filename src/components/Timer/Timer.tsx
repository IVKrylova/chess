import { FC, useState, useRef, useEffect, Dispatch, SetStateAction } from 'react';
import { Colors } from '../../models/Colors';
import { PlayerClass } from '../../models/PlayerClass';
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

  useEffect(() => {
    startTimer();
  }, [currentPlayer])

  const decrementWhiteTimer = (): void  => {
    if (whiteTime === 0) setWinner(Colors.BLACK);
    setWhiteTime(prev => prev - 1);
  }

  const decrementBlackTimer = (): void  => {
    if (blackTime === 0) setWinner(Colors.WHITE);
    setBlackTime(prev => prev - 1);
  }

  const startTimer = (): void  => {
    if (timer.current) clearInterval(timer.current);

    const callback = currentPlayer?.color === Colors.WHITE ? decrementWhiteTimer : decrementBlackTimer;

    timer.current = setInterval(callback, 1000);
  }

  const handleRestart = (): void  => {
    setWhiteTime(300);
    setBlackTime(300);
    restart();
  }

  return (
    <div className='timer'>
      <button className='button-restart' type='button' onClick={handleRestart}>
        Restart game
      </button>
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