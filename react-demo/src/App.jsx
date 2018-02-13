import React, { Component } from 'react';

import './App.css';
import logo from './static/paul_logo_1440.png'
import UserInput from './components/UserInput'
import UserOutput from './components/UserOutput'
import MyButton from './components/MyButton'

// Paul: The thing I don't like about react is that
// it mixes the view(html), model(js) and styling(css) all in one place.
// At the same time, it is using an alien syntax of JSX which
// will confuse experienced html-js-css developers
class App extends Component {
  state = {
    name: "Paul Michael",
    showOutput: true
  };

  inputChangedHandler = (event) => {
    this.setState({name: event.target.value})
  }

  resetNameHandler = () => {
    this.setState({name: "Paul Michael"})
  }

  toggleHandler = () => {
    const currState = this.state.showOutput;
    this.setState({showOutput: !currState});
  }

  render() {
    var output = null;

    if (this.state.showOutput) {
      output = (
        <UserOutput name={this.state.name}/>
      );
    }

    return (
      <div className="App">
        <img src={logo} width="400px" alt=""/>
        <UserInput inputChanged={this.inputChangedHandler} name={this.state.name}/>

        <MyButton click={this.resetNameHandler} label="Reset Name"/>
        <MyButton click={this.toggleHandler} label="Toggle OutputDiv"/>

        {output}
      </div>
    );
  }
}

export default App;
