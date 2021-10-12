

import {useState} from 'react';

import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';


export const NoteItem = ({ id, name, onDelete, onUpdate, completed, onCompleted }) => {

    const [value, setValue] = useState(name);

    const [isEditable, setIsEditable] = useState(false);

    const onDeleteItem = () => {
        onDelete(id)
    } 

    const onUpdateItem = () => {
        onUpdate(id, value)
        setIsEditable(false)
    } 

    const onCompletedItem = () => {
        onCompleted(id, completed)
    }

    return(
        <Card sx={{ margin: 3, padding: 2, }}>
                { isEditable ? 
                    <TextField fullWidth variant="outlined" value={value} onChange={(e)=> setValue(e.target.value)}/> 
                    :  <p style={{ textDecoration: completed ? 'line-through' : 'none' }}>{name}</p>}

                <Button size="small" onClick={onDeleteItem}>Delete</Button>

                <Checkbox checked={completed} onChange={onCompletedItem} />

               {isEditable ? <Button size="small" onClick={onUpdateItem}>Save</Button>
               : <Button size="small" onClick={()=>setIsEditable(true)}>Edit</Button> }
                
        </Card>
       
    )
}