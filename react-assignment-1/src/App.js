import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CustomisedOutput from './CustomisedOutput/CustomisedOutput.js';
import CustomisedInput from './CustomisedInput/CustomisedInput.js';

class App extends Component {

state = {
userName: [
  {name : "Praveen1"}
  ]
}

nameChangedHandler = (event) => {

this.setState({
  userName: [
  {name : event.target.value}
  ]
})

}


  render() {
    return (
      <div className="App">
        <CustomisedInput changed = {this.nameChangedHandler} currentName = {this.state.userName[0].name}/>
        <CustomisedOutput userName={this.state.userName[0].name}/>
      </div>
    );
  }
}

export default App;
