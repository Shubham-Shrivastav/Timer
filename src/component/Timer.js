import React, { useState, useEffect } from 'react';

function Timer() {
const [minutes, setMinutes] = useState(0);
const [seconds, setSeconds] = useState(0);

const handleStart = () => {
const totalSeconds = minutes * 60;
setSeconds(totalSeconds);
};

useEffect(() => {
if (seconds > 0) {
const timer = setInterval(() => {
setSeconds(prevSeconds => prevSeconds - 1);
}, 1000);


  return () => clearInterval(timer);
}

}, [seconds]);

const formattedTime = `${Math.floor(seconds / 60)}:${seconds % 60}`;

return (
<div>
<h2>Timer</h2>
<div>
<input
type="number"
placeholder="Enter minutes"
value={minutes}
onChange={e => setMinutes(e.target.value)}
/>
<button onClick={handleStart}>Start</button>
</div>
<div>
<h3>{formattedTime}</h3>
</div>
</div>
);
}

export default Timer;