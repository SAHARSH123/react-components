import React, { useCallback, useEffect, useRef, useState } from "react";

const SECONDS = 1000;
const MINUTE = 60 * SECONDS;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

const Counter = ({ duration, onExpire, beforeReset }) => {
  const [remainingTime, setRemainingTime] = useState(duration);
  const intervalId = useRef(null);

  useEffect(() => {
    if (remainingTime <= 0) {
      onExpire();
      return;
    }

    intervalId.current = setTimeout(() => {
      setRemainingTime((currentTime) => currentTime - 1000);
    }, 1000);

    return () => {
      clearTimeout(intervalId.current);
    };
  }, [remainingTime]);

  const resetTimer = () => {
    beforeReset();
    clearTimeout(intervalId.current);
    setRemainingTime(duration);
  };

  const convertTime = useCallback((currentTime) => {
    const days = Math.floor(currentTime / DAY);
    currentTime = currentTime % DAY;
    const hours = Math.floor(currentTime / HOUR);
    currentTime = currentTime % HOUR;
    const minutes = Math.floor(currentTime / MINUTE);
    currentTime = currentTime % MINUTE;
    const seconds = Math.floor(currentTime / SECONDS);

    let time = `${days} days ${hours} hours ${minutes} minutes and ${seconds} seconds`;
    //console.log(time);
    return time;
  }, []);

  const timeString = convertTime(remainingTime);

  return (
    <div>
      <div>Time Remaining: {timeString}</div>
      <button onClick={resetTimer}>Reset timer</button>
    </div>
  );
};

export default Counter;
