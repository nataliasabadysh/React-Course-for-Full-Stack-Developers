// Core
import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';

export const ExampleUseEffect = () => {
  const [counter, setCounter] = useState(0);

  const increase = (prevCounter) => prevCounter + 1;

  useEffect(() => {
    const id = setInterval(() => {
      setCounter(increase);
    }, 1000);

    return () => {
      clearInterval(id);
      console.log("leave")
    }
  }, [counter]);

  return (
    <>
      <h1>{ counter }</h1>
    </>
  )
};
