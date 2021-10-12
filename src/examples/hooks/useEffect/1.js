// Core
import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';

const Example = () => {
  console.log('Render');

  const [val, setVal] = useState(0);

  useEffect(() => {
    console.log('First Render');
  }, []);

  return (
    <>
      <h1>{ val }</h1>
      <button onClick={ () => setVal(1) }>Update</button>
    </>
  )
};
