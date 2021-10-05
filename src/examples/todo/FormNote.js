import { uuid } from 'uuidv4';
import { useState } from 'react';

export const FormNote = ({ onSendNote, onUpdate }) => {
    // from props we will take method as onFormSignUp
  
    const [value, setValue] = useState('');
  
    const handleChange = (e) => {
      const { value } = e.target;
      setValue(value);
    };

    const onSend = (e) => {
      e.preventDefault();

      const data = {
        text: value,
        id: uuid(),
      }
      onSendNote(data)
      setValue('') // reset 
    };
  
    return (
      <form onSubmit={onSend}>
        <input type="text" value={value} onChange={handleChange} />
        <p onClick={()=> onUpdate()}>edit</p>
        <button type="submit">Send</button>
      </form>
    );
  };
  