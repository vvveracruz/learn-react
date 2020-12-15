import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Alice', age: 23 },
      { name: 'Ve', age: 21 },
      { name: 'Nathan', age: 24 }
    ],
    showPersons: false
  }

  switchNameHandler = ( newName ) => {
    // setState is a method from Component, it is available because
    // this class extendes Component
    this.setState( { persons: [
      { name: newName, age: 28 },
      { name: 'Alice', age: 23 },
      { name: 'Ve', age: 21 },
      { name: 'Nathan', age: 24 }
    ] } )
  }

  nameChangedHandler = (event) => {
    this.setState( { persons: [
      { name: event.target.value, age: 28 },
      { name: 'Alice', age: 23 },
      { name: 'Ve', age: 21 },
      { name: 'Nathan', age: 24 }
    ] } )
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  render() {
    const buttonStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (

      <div className="App">
        <h1>Hi this Ve's react app.</h1>

        <button
          style = { buttonStyle }
          onClick = {this.togglePersonsHandler } > Button
        </button>
        { this.state.showPersons ?
          <div>
            <Person
              name = { this.state.persons[0].name }
              age = { this.state.persons[0].age }
              changed = { this.nameChangedHandler }
            />
            <Person
              name = { this.state.persons[1].name }
              age = { this.state.persons[1].age }
              click = { this.switchNameHandler.bind( this, 'Anna') }
            >
              My hobbies: racing. </Person>
            <Person
              name = { this.state.persons[2].name }
              age = { this.state.persons[2].age }
            />
            <Person
              name = { this.state.persons[3].name }
              age = { this.state.persons[3].age }
            />
          </div> :
          null
        }
      </div>

    );
  };
}

export default App;
