import React from 'react';
import './App.css';
import Component1 from './Component1';

// function startTimer(){let t=new Date().getTime(); return setInterval(()=>console.log(Math.floor((new Date().getTime()-t)/1000)),1000)} - это с замыканием
// p=startTimer();
// After some time to stop Timing use:  clearInterval(p);

class App extends React.Component {
  constructor (initialState){
    super(initialState);
    this.state={
      startUnixTime: undefined,
      currentUnixTime: undefined,
      timerId: undefined
    };
  }

  startTimer(){
    if (this.state.timerId) clearInterval(this.state.timerId);
    this.setState({
      startUnixTime: new Date().getTime(),
      currentUnixTime: new Date().getTime(),
      timerId: setInterval(()=>this.setCurrentUnixTime(), 1000)
    });
  }

  setCurrentUnixTime(){
    console.log(this.state);
    this.setState({...this.state, currentUnixTime: new Date().getTime()});
  }

  render(){
    const timerValue = this.state.startUnixTime ? Math.floor((this.state.currentUnixTime - this.state.startUnixTime)/1000) + " c" : undefined;
    //let timerValue;
    return (
      <div className="App">
        Я приложение. <br/>
        У меня есть счётчик: {timerValue}
        <Component1 startTimer={()=>this.startTimer()} />
      </div>
    );
  }
}

export default App;
