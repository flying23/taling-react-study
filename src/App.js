import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter11 from "./Counter11.js";
import Counter12 from "./Counter12.js";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
    };
  }

  handleIncrease2 = () => {
    this.setState({ number: this.state.number +2 })
  }

  handleDecrease2 = () => {
    this.setState({ number: this.state.number -2 })
  }

  handleReset2 = () => {
    this.setState({ number: this.state.number=0 })
  }


  handleIncrease1 = () => {
    this.setState({ number: this.state.number +1 })
  }

  handleDecrease1 = () => {
    this.setState({ number: this.state.number -1 })
  }

  handleReset1 = () => {
    this.setState({ number: this.state.number=0 })
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Counter2    
          </h1>
          <Counter11 num={"값: " +  this.state.number}
            add={this.handleIncrease2}
            sub={this.handleDecrease2}
            reset={this.handleReset2} 

            />
        
        
    
          <h1>
            Counter1    
          </h1>
          <Counter12 num={"값: " + this.state.number} 
            add={this.handleIncrease1}
            sub={this.handleDecrease1}
            reset={this.handleReset1}  
            />
        

          
          <a
            className="App-link1"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          <a
            className="App-link2"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >  
          </a>
        </a></header>
      </div>
    );
  }
}

export default App;


