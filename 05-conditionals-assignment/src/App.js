import './App.css';
import { Component } from 'react';
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent';

//                    Class: App
class App extends Component {
  state = {
    inputValue: [],
    showChars: []
  }

  //                  App: handlers
  deleteCharHandler = ( index ) => {
    let newShowChars = [...this.state.showChars];
    newShowChars.splice( index, 1 );
    this.setState( { showChars: newShowChars } );
  }

  inputChangeHandler = ( event ) => {
    const inputValueString = event.target.value.split('');
    let newShowChars = {};

    this.setState( { inputValue: event.target.value })

    newShowChars = (
      inputValueString.map( (c, index) => {
        return (
          <CharComponent
            char = {c}
            click = { ( index ) => this.deleteCharHandler( index ) }/>
          )
      } )
    )
    this.setState( { showChars: newShowChars })
  }

  //                  App: render
  render() {
    //                App: render: return
    return (
      <div className="App">
        <h1>Assignment 2</h1>
        <p>Enter some text.</p>
        <input
          type ="text"
          onChange ={ (event) => this.inputChangeHandler( event ) }
          placeholder ='Enter your text' />
        <ValidationComponent text = { this.state.inputValue }/>
        <div> { this.state.showChars }</div>

      </div>
    );
  }
}

export default App;
