import React from 'react';
//  Logic for creating React components
import ReactDOM from 'react-dom';
//  Rendering components to site

//  Captial letters are required for function names in React
function Person( props ) {

  return (

    <div className="person">
      <h1> {props.name} </h1>
      <p> Your age: {props.age} </p>
    </div>

  );

}

var app = (
  
  <>
    <Person name="Mac" age="63" />
    <Person name="Max" age="29" />
    <Person name="Ve" age="21" />
  </>

);

ReactDOM.render( app,
  document.querySelector('#app') );
