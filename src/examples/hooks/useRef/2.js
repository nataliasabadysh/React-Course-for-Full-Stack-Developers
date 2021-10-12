// Core
import React, { useRef } from 'react';
import { render } from 'react-dom';

 // Example focus 

const Example = () => {
  const inputEl = useRef(null);

  const onButtonClick = () => {
    inputEl.current.focus();
  };

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Фокусуватись на полі вводу</button>
    </>
  );
};
