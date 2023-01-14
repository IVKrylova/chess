import { FC, useState, useRef, useEffect } from 'react';
import { Colors } from '../../models/Colors';
import { PlayerClass } from '../../models/PlayerClass';
import './Timer.css';

interface TimerProps {
  currentPlayer: PlayerClass | null,
  restart: () => void,
}

const Timer: FC<TimerProps> = ({ currentPlayer, restart }) => {
  const [whiteTime, setWhiteTime] = useState<number>(300);
  const [blackTime, setBlackTime] = useState<number>(300);
  const timer = useRef<null | ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    startTimer();
  }, [currentPlayer])

  const decrementWhiteTimer = () => {
    setWhiteTime(prev => prev - 1);
  }

  const decrementBlackTimer = () => {
    setBlackTime(prev => prev - 1);
  }

  const startTimer = () => {
    if (timer.current) clearInterval(timer.current);

    const callback = currentPlayer?.color === Colors.WHITE ? decrementWhiteTimer : decrementBlackTimer;

    timer.current = setInterval(callback, 1000);
  }

  const handleRestart = () => {
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