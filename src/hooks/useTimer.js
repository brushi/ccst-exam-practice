import { useState, useRef, useCallback, useEffect } from 'react';

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

export default function useTimer(initialSeconds, autoStart = false, onTimeUp) {
  const [timeLeft, setTimeLeft] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(autoStart);
  const firedRef = useRef(false);
  const intervalRef = useRef(null);
  const onTimeUpRef = useRef(onTimeUp);

  onTimeUpRef.current = onTimeUp;

  const clearTimer = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!isRunning) {
      clearTimer();
      return;
    }

    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearTimer();
          setIsRunning(false);
          if (!firedRef.current) {
            firedRef.current = true;
            if (onTimeUpRef.current) {
              onTimeUpRef.current();
            }
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return clearTimer;
  }, [isRunning, clearTimer]);

  useEffect(() => {
    return clearTimer;
  }, [clearTimer]);

  const start = useCallback(() => {
    firedRef.current = false;
    setIsRunning(true);
  }, []);

  const pause = useCallback(() => {
    setIsRunning(false);
  }, []);

  const reset = useCallback((seconds) => {
    clearTimer();
    firedRef.current = false;
    setTimeLeft(seconds ?? initialSeconds);
    setIsRunning(false);
  }, [clearTimer, initialSeconds]);

  const isWarning = timeLeft < 300 && timeLeft > 0 && isRunning;
  const isDanger = timeLeft < 60 && timeLeft > 0 && isRunning;

  return {
    timeLeft,
    isRunning,
    isWarning,
    isDanger,
    start,
    pause,
    reset,
    formatTime,
  };
}
