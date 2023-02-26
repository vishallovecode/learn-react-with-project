import { useEffect, useRef, useState } from "react";

const Timer = (props) => {
    const [timer , setTimer] = useState(0);

    // const [timerId , setTimerId] = useState(null) THIS APPROACH IS NOT OPTIMIZE
    let timeRef = null; // THIS WILL NOT WORK

    let timerRef =  useRef(null);

    let h2ref  = useRef(null);
    const onReset =()=>{
        setTimer(0);
        console.log(timerRef.current, 'TIMEREF=>1');
        clearInterval(timerRef.current)
        props.setReset(false)
      
        
}

    useEffect(()=>{
        console.log("Hey Reset call")
            if(props.reset) {
                onReset();
            }
    }, [props.reset])

    const startTimer = ()=> {
        timerRef.current = setInterval(()=>{
                setTimer((timer)=> timer+1);
            }, 1000)
            // console.log(h2ref.current, 'TIMEREF');
            // const h2element = h2ref.current;
            // h2element.style.display = 'none'
            console.log(timerRef)
    }
    const onStop = ()=> {
        // clearInterval(timerId)
        console.log(timerRef.current, 'TIMEREF=>1');
        clearInterval(timerRef.current)
    }

  
    

  return (
    <div>


      <h2 ref={h2ref}>{timer}</h2>
        <div style = {{padding:'30px'}}>
      <button onClick={onStop}> Pause</button>
      <button onClick={startTimer}>Start</button>
      <button onClick={onReset}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;


