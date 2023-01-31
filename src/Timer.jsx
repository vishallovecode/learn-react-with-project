 
import { useState } from 'react';
import './App.css'
 
 const Timer = () => {
  const [timer , setTimer]  = useState(0); 

  

  const startTimerHandler = () => {
    setInterval(() => {
        setTimer((value)=>value+1) //
    }, 1000);
  };

  return (
    <div className='timer'>
      <button onClick={startTimerHandler}> StarT Timer</button>
      <div>Timer: {timer}</div>
    </div>
  );
};

export default Timer;

// if you want to update the ui once data is updated lest say i have userDetails which is storing the details about
// the user you want to update ui on the basis of userDetails data on every updation of it. in that scenario use state 
