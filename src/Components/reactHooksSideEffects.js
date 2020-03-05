import React from "react";
import { useState, useEffect } from 'react';

const CounterWithNameAndSideEffect = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Flavio')

  useEffect(() => {
    console.log(`Hi ${name} you clicked ${count} times`)
  });
  
  return (
    <div>
      <h1>React Hooks - Name Side Effects</h1>
      <p>Hi {name} you clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={() => setName(name === 'Flavio' ? 'Roger' : 'Flavio')}>
        Change name
      </button>
    </div>
  )
}

export default CounterWithNameAndSideEffect;