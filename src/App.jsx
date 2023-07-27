import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count,setCount]=useState(0);
  const [runnig,setRunning]= useState(false);
  const[inputTime,setInputTime]=useState('');
  const[time, setTime]=useState(0);
  const [lastCount, setLastCount]=useState(0);

  useEffect(()=>{
    let interval;

    if(runnig && count<time){
      interval=setInterval(()=>{
        setCount((prevCount)=>{
        if(prevCount === time){
          setRunning(false);
          return prevCount;
        }
        return prevCount + 1;
      });
      },1000);
    }
    return() => clearInterval(interval);
  },[runnig,count,time]);
  

const handleStart=()=>{
  if(inputTime >0 && !runnig){
    setTime(+inputTime);
    setCount(lastCount);
    setRunning(true);
  }
}
const handleStop=()=>{
  setRunning(false);
  setLastCount(count);
}
const handleReset=()=>{
  setCount(0);
  setRunning(false);
  setLastCount(0);
}

  return (
    <>
       <div>
      <div className="counter">{count}</div>
      <div className="input-conatiner">
        <input type="number" value={inputTime}  onChange={(e)=> setInputTime(e.target.value)} />
      </div>
      <div className="button">
        {!runnig ? (
          <button onClick={handleStart}>Start</button>
        ):(
          <button onClick={handleStop}>Stop</button>
        )}
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
    </>
  )
}

export default App

