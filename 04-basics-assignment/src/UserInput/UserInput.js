import React from 'react';
import './UserInput.css';

const userOutput = ( props ) => {
  return (
    <div>
      <input
        type="text"
        onChange = { props.handler }
        value= { props.userName }/>
    </div>
  );
}

export default userOutput;
