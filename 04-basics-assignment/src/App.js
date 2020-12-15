import React, { Component } from 'react';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';
import './App.css';

class App extends Component {
  state = {
    userNames: [
      'vvveracruz',
      'medusaInChains',
      'beepboop',
    ]
  }

  userNameHandler = ( event ) => {
    this.setState(
      { userNames : [
          'vvveracruz',
          event.target.value,
          'beepboop',
      ] } )
  }

  render() {
    return (
      <div className="App">
        <h1>Assignment One</h1>
        <UserInput
          userName = { this.state.userNames[1] }
          handler = { this.userNameHandler }
          />
        <UserOutput
          userName = { this.state.userNames[0] }
          />
        <UserOutput
          userName = { this.state.userNames[1] }
          />
        <UserOutput
          userName = { this.state.userNames[2] }
          />
      </div>
    );
  }
}

export default App;
