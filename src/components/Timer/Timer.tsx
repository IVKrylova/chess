import { FC, useState, useRef, useEffect } from 'react';
import { Colors } from '../../models/Colors';
import { PlayerClass } from '../../models/PlayerClass';

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

  return (
    <div>
      <button type='button' onClick={restart}>
        Restart game
      </button>
      <p>{`White - ${whiteTime}`}</p>
      <p>{`Black - ${blackTime}`}</p>
    </div>
  );
}

export default Timer;