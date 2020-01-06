import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

//import the title component
import Title from './Title/Title'

//import the CountDown component
import CountDown from './CountDown/CountDown'

//import the Controller component
import Controller from './Controller/Controller'

//import the Lap component
import Laps from './Laps/Laps'

//import the Todo component
import Todos from './Todo/Todos'
import AddTodo from './Todo/AddTodo'

class App extends Component {
//state for stop watch

state = {
  
      time: {  
        min: 0,
        sec: 0,
        mili: 0
      },
      laps: []
}


//Start Method 

getStart(){
  this.intervalID = setInterval(() => {
    //shore the value
    let min= this.state.time.min
    let sec = this.state.time.sec
    let mili = this.state.time.mili

    if(mili >= 10){
      sec = sec + 1
      mili = 0
    }

    if(sec >= 60){
      min = min + 1
      sec = 0
    }

    this.setState({
      ...this.state,
        time: {
          min,
          sec,
          mili: mili + 1

        }
    })

  }, 100)
}

//pause method

getPause(){
  clearInterval(this.intervalID)
}

//Lap method
getLap(){
    let time = {
      ...this.state.time
    }
    this.setState({
      ...this.state,
      laps: [time, ...this.state.laps]
    })
    // console.log(this.state.laps)
    
}

// Reset Method
getReset(){
   this.setState({
    time: {  
      min: 0,
      sec: 0,
      mili: 0
    },
    laps: [] //Clear the laps

   })
}

//state for tudo app
  // state = {
  //   todos : [
  //     {name: 'Mehedi', age: 99, position: 'noob', id:  1},
  //     {name: 'Yusuf', age: 99, position: 'noob', id: 2},
  //     {name: 'Abir', age: 99, position: 'noob', id: 3}
  //   ]
  // }

  // addTodo = todo => {
  //   const newTodo = [...this.state.todos, todo]
  //   this.setState({todos: newTodo}) 
  // }

  // deleteTodo = id => {
  //   const todos = this.state.todos.filter(todo => todo.id !== id)
  //   this.setState({todos})
  // }

  render(){ 
  return (
    <div className="App">
      <div className="container py-5">
        <div className="row">
        <div className="col-sm-8 offset-sm-2">
            <Title />
            <CountDown time={ this.state.time }/>
            <Controller 
             start = { this.getStart.bind(this) } //when start button click this method are active
             pause = { this.getPause.bind(this) }  //when pause button click this method are active
             reset = { this.getReset.bind(this) } //when pause button click this method are active
             lap = { this.getLap.bind(this) } //when Lap button click this method are active
            />
            <Laps className="my-5" laps={ this.state.laps }/>
          </div>
        </div>
      </div>
    </div> 
  
  );
}
}

export default App;
