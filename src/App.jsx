import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const[count,setCount]=useState(0);
 const [isRunning, setIsRunning] = useState(false);
 const [initialTime, setInitialTime] = useState(0);

 useEffect(() => {
  let interval;
  if (isRunning && count < initialTime) {
    interval = setInterval(() => {
      setCount((prevTime) => prevTime + 1);
    }, 1000);
  }else if(count>=initialTime){
    setIsRunning(false);
  }

  return () => {
    clearInterval(interval);
  };
}, [isRunning,count,initialTime]);


const handleInputChange = (event) => {
  setInitialTime(parseInt(event.target.value));
  if (!isRunning) {
    setCount(parseInt(event.target.value));
  }
};

const start=()=>{
  setIsRunning(true);
}
const stop=()=>{
  setIsRunning(false);
}
const reset=()=>{
  setCount(0);
  setIsRunning(false);
}
  return (
    <>
    <p>count:{count}</p>
     <input type="number" placeholder="Please enter  Time" onChange={handleInputChange}/>
     <br/>
     <div>
     <button onClick={start}>Start</button>
     <button onClick={stop}>Stop</button>
     <button onClick={reset}>Reset</button>
     </div>
    </>
  )
}

export default App
