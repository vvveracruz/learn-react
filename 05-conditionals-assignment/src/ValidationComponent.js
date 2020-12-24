import React from 'react';

const validationComponent = ( props ) => {
  const minLen = 5;
  const maxLen = 80;
  let outcomeText = 'Text ok.';

  if ( props.text.length < minLen ) {
    outcomeText = 'Text too short. The minimum is ' + minLen.toString() + ' characters. Try typing something longer :)'
  }

  if ( props.text.length > maxLen ) {
    outcomeText = 'Text too long. The maximum is ' + maxLen.toString() + ' characters. Try deleting some of it :)'
  }

  return (
    <>
      <p>{ outcomeText }</p>
    </>
  )
};

export default validationComponent;
