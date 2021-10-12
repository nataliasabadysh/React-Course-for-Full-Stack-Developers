// Core
import React, { useRef } from 'react';
import { render } from 'react-dom';

const Example = () => {
  const val = useRef(0);

  val.current += 1; //  we can mutable the obj 

  console.log('Render');

  return (
    <>
      <h1>{ val.current }</h1>
    </>
  );
};
