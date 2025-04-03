import React, { useState, useEffect } from 'react';

function DistanceExercise({ exercise, setMenuScreen }) {
  const [distance, setDistance] = useState(0); 
  const [cycling, setCycling] = useState(false); 

  const handleStartStop = () => {
    setCycling(!cycling); 
  };

  const handleReset = () => {
    setDistance(0); 
  };

  useEffect(() => {
    let interval;
    if (cycling) {
      interval = setInterval(() => {
        setDistance(prevDistance => prevDistance + 0.1); 
      }, 1000);
    } else {
      clearInterval(interval);
    }
    
    return () => clearInterval(interval);
  }, [cycling]);

  return (
    <div>
      <p>{exercise.name}</p>
      <p style={{ fontSize: "3em" }}>{distance.toFixed(1)} km</p>
      <button onClick={handleStartStop} style={{ fontSize: "3em" }}>
        {cycling ? 'Stop' : 'Start'}
      </button>
      <button onClick={handleReset} style={{ fontSize: "3em" }}>
        Reset
      </button><br />
      <button style={{ fontSize: "2em" }} onClick={setMenuScreen}>Return to Menu</button>
    </div>
  );
}

export default DistanceExercise;