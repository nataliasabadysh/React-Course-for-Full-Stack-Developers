import { uuid } from 'uuidv4';
import { useState } from 'react';
import { FormNote } from './FormNote';

export const ToDoList = () => {
    // from props we will take method as onFormSignUp
    const [todo, setTodo] = useState([]);

    const onSend = (data) => {
      setTodo(prev=> [...prev, data])
    };

    const onUpdate = () => {

    }
  
    // REMOVE prevState.filter(({ id }) => id !== taskId),

    // UPDATE prevState => ({
    //     tasks: prevState.map(task =>
    //       task.id === taskId ? { ...task, completed: !task.completed } : task,
    //     ),
    //   }));


    //  FILTER  todo.filter(task =>note.text.toLowerCase().includes(filter.toLowerCase()));


    console.log('text', todo);


    return <FormNote onSendNote={onSend} onUpdate={onUpdate} />
  };
  