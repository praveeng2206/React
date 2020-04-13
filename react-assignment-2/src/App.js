import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ValidateComponent from './Validator/ValidateComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state =(
    {
      inputString: "",
    }

  )
nameChangeListener=(event) =>{
  this.setState(
    { inputString: event.target.value,
    }
  )

}
deleteCharHandler=(index) =>{

  const inputText = this.state.inputString.split('');
        inputText.splice(index,1);
  const updatedtext = inputText.join('');
  this.setState({
    inputString: updatedtext

  })
}
  render() {
    
       const charList = this.state.inputString.split('').map((charElement,index)=> {
          return(
          <CharComponent charData={charElement} key={index} clicked={()=>this.deleteCharHandler(index)}/>       
          );
        });
        
      
    
    return (
      <div className="App">
        <input type="text" onChange={this.nameChangeListener} value={this.state.inputString}/>
        <p>The length of the text entered is : {this.state.inputString.length}</p>
        <ValidateComponent length={this.state.inputString.length}/>
        {charList}
      </div>
    );
  }
}

export default App;
