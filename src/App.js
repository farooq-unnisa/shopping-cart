import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';

class App extends Component {
  state = {
    counters: [
        {id: 1, value:4},
        {id: 2, value:0},
        {id: 3, value:0},
        {id: 4, value:0}
    ]
  }
  constructor(){
    super();
    console.log('App - Constructor');
  }
  componentDidMount(){
    console.log('App - Mounted');
  }
  handleIncrement = (counter) =>{
    // //like in handleReset() all the values will have an increment of +1
    // //but we want a specific counter to +1 when we click on + button hence follow the other method
    // const counters = this.state.counters.forEach(c=> {
    //     c.value+=1;
    // return c});
    // other method
    const counters = [...this.state.counters]; //... is spead operatr- used to clone an obj
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters});
  };
  handleDecrement = (counter) =>{
    const counters = [...this.state.counters]; //... is spead operatr- used to clone an obj
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    if(counters[index].value >0){
      counters[index].value--;
    }
    else counters[index].value = 0;
    // counters[index].value--;
    this.setState({counters});
  };
  handleReset=()=>{
      // with this method all the values are changed to 0
      const counters = this.state.counters.map(c=>{
          c.value = 0; 
          return c;
      })
      this.setState({counters});
  };
  handleDelete=(counterId)=>{
      // console.log('Event Handler Called', counterId);
      const counters = this.state.counters.filter(c => c.id !== counterId);
      // this.setState({counters: counters}); //or (since both key and value are same)
      this.setState({counters});
  };
  render(){  
    console.log('App - Rendered');
    return (
      <React.Fragment>
        <NavBar 
        totalCounters={this.state.counters.filter(c=> c.value>0).length}
        />
        <main className='container'>
          <Counters 
          counters={this.state.counters}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onReset={this.handleReset}
          onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
