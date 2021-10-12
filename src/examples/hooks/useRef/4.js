// Core
import React, { useRef, useEffect } from 'react';
import { render } from 'react-dom';

const Example = () => {
  const intervalRef = useRef();

  useEffect(() => {
    const id = setInterval(() => {
      console.log('execute');
    });

    intervalRef.current = id;

    return () => {
      clearInterval(intervalRef.current);
    };
  });

  const stop = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <>
      <button onClick={ stop }>Stop</button>
    </>
  );
};
