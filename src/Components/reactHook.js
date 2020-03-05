import React from "react";
import { useState } from 'react';

function Button(props) {
	return (
  	<button onClick={props.onClickFunction}>
      "Click To Increment!"
    </button>
  );
}


function Presentation(props) {
	return (
  	<li>{props.message}</li>
  );
}
 
function ReactHook() {
	const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter(counter+1);
	return (
    <div>
      <h1>How To Use A React Hook</h1>
      <Button onClickFunction={incrementCounter} increment={1} />
      <Presentation message={counter}/>
    </div>  
  );
}

export default ReactHook;