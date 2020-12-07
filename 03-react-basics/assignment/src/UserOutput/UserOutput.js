import React from 'react';
import './UserOutput.css';

const userOutput = ( props ) => {
  return (
    <div>
      <p>‘Christmas won’t be Christmas without any presents,’ grumbled Jo, lying on the rug.</p>
      <p>‘It’s so dreadful to be poor!’ sighed Meg, looking down at her old dress.</p>
      <p className="userName">By { props.userName }</p>
    </div>
  );
}

export default userOutput;
