import React, { useState } from 'react';
import './App.css';
import Component1 from './Component1';

// function startTimer(){let t=new Date().getTime(); return setInterval(()=>console.log(Math.floor((new Date().getTime()-t)/1000)),1000)} - это с замыканием
// p=startTimer();
// After some time to stop Timing use:  clearInterval(p);

function App() {
  const [myState, setMyState] = useState({startUnixTime: undefined, currentUnixTime: undefined, timerId: undefined});
  const timerValue = myState.startUnixTime ? Math.floor((new Date().getTime()-myState.startUnixTime)/1000 + "с") : undefined;
  return (
    <div className="App">
      Я приложение. <br/>
      У меня есть счётчик: {timerValue} с.
      <Component1 startTimer={()=>setMyState({
        startUnixTime: new Date().getTime(),
        currentUnixTime: new Date().getTime(),
        timerId: setInterval(()=>{setMyState({...myState, currentUnixTime: new Date().getTime()})},1000)})} />
    </div>
  );
}

export default App;
