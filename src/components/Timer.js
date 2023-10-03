import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setMilliseconds((prevMilliseconds) => {
          if (prevMilliseconds === 95) {
            setSeconds((prevSeconds) => {
              if (prevSeconds === 59) {
                setMinutes((prevMinutes) => {
                  return prevMinutes + 1;
                });
                return 0;
              }
              return prevSeconds + 1;
            });
            return 0;
          }
          return prevMilliseconds + 1;
        });
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [running]);

  const handleStart = () => {
    setRunning(true);
  };

  const handleStop = () => {
    setRunning(false);
  };

  const handleReset = () => {
    setRunning(false);
    setMinutes(0);
    setMilliseconds(0);
    setSeconds(0);
  };

  return (
    <div>
      <h1>
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')},{String(milliseconds).padStart(2, '0')}
      </h1>
      <button className='App-Timer1' onClick={handleReset}>Reset</button>
      {running ? (
        <button className='App-Timer' onClick={handleStop}>Stop</button>
      ) : (
        <button className='App-Timer' onClick={handleStart}>Mulai</button>
      )}
    </div>
  );
};

export default Timer;
