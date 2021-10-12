// Core
import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';

const Example = () => {
  const [counter, setCounter] = useState(0);

  const increase = (prevCounter) => prevCounter + 1;

  useEffect(() => {
    const id = setInterval(() => {
      setCounter(increase);
    }, 1000);

    return () => {
      clearInterval(id);
    }
  }, [counter]);

  return (
    <>
      <h1>{ counter }</h1>
    </>
  )
};
