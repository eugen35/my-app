import React from 'react';
import './App.css';
import Component1 from './Component1';

// function startTimer(){let t=new Date().getTime(); return setInterval(()=>console.log(Math.floor((new Date().getTime()-t)/1000)),1000)} - это с замыканием
// p=startTimer();
// After some time to stop Timing use:  clearInterval(p);




// ВНИМАНИЕ! ТАК НИКОГДА НЕ СРАБОТАЕТ! НУЖНО ЧИТАТЬ reactjs вопросы и ответы, связанные с хуками... Через тернии можно заставить это заработать!!!!!!!!!!



function App() {
  const [state, setState] = React.useState({
    a:1,
    startUnixTime: undefined,
    currentUnixTime: undefined,
    timerId: undefined
  });

  function startTimer(){
    if (state.timerId) clearInterval(state.timerId);
    setState({
      a:1,
      startUnixTime: new Date().getTime(),
      currentUnixTime: new Date().getTime(),
      timerId: setInterval(()=>setCurrentUnixTime, 5000)
    });
  }

  function setCurrentUnixTime(){
    console.log(state);
    setState({...state, currentUnixTime: new Date().getTime()});
  }

  const timerValue = state.startUnixTime ? Math.floor((state.currentUnixTime - state.startUnixTime)/1000) + " c" : undefined;

  return (
    <div className="App">
      Я приложение. <br/>
      {JSON.stringify(state)} <br/>
      У меня есть счётчик: {timerValue}
      <Component1 startTimer={()=>startTimer()} />
    </div>
  );

}

export default App;
