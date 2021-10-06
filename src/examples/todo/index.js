import { uuid } from 'uuidv4';
import { useState } from 'react';
import { FormNote } from './FormNote';

export const ToDoList = () => {
    // from props we will take method as onFormSignUp
    const [todo, setTodo] = useState([]);

    const onSend = (data) => {
      setTodo(prev=> [...prev, data])
    };

    return <FormNote onSendNote={onSend} onUpdate={onUpdate} />
  };
  