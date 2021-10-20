// Core
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uuid } from 'uuidv4';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Card } from '@mui/material';
// Redux
import { setNote, deleteNote } from './redux/notes/action';
// Instruments
import { containerStyle } from './theme/styles';

function App() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const notesList = useSelector(state => state.notes);

  const handleChange = (e)=> setValue(e.target.value);

  const onSave = () => {
    const data = {
        name: value,
        id: uuid(),
        completed: false
    }
    dispatch(setNote(data))
    setValue('')
  }

  const onDelete = (property) =>  dispatch(deleteNote(property))


  return (
    <div style={containerStyle}>
        <Box component="form">
            <TextField fullWidth label="Name of the note" variant="outlined" value={value} onChange={handleChange}/>
            <Button disabled={value.length < 1}  fullWidth variant="contained" onClick={onSave}>Send</Button>
        </Box>


      { notesList && notesList.map((item, index) =>{
          return(
            <Card sx={{ margin: 3, padding: 2, }} key={index}>
              {item.name}
              <Button fullWidth variant="contained" onClick={()=> onDelete(item.id)}>Delete</Button>
          </Card>
          )
        })
      }
    </div>
  );
}

export default App;
