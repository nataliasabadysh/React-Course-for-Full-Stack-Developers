import {
    useState,
    useEffect
} from 'react';
import {
    uuid
} from 'uuidv4';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {
    Button
} from '@mui/material';
import {
    NoteItem
} from '../NoteItem';
import storage from '../utils/storage';



export const NoteList = () => {
    const [list, setList] = useState([]);

    const [value, setValue] = useState('');
    const handleChange = (e) => setValue(e.target.value);

    const onSave = () => {
        const data = {
            name: value,
            id: uuid(),
            completed: false
        }

        setList((prevState) => {
            const prev = prevState ? prevState : {};
            return [...prev, data]
        });
        setValue('')
    }

    // useEffect(() => {
    //     const listData = localStorage.getItem("list");
    //     if (listData) {
    //         setList(listData)
    //     }
    // }, [])

    // useEffect(() => {
    //     if (list) {
    //         localStorage.setItem("list", list);
    //     }
    // }, [list])


    const onDelete = (id) => {
        const newLis = list.filter(item => item.id !== id) // new Array without "id" - item  
        setList(newLis);
    }

    const onUpdate = (id, text) => {
        const newLis = list.map(item => item.id === id ? {
            ...item,
            name: text
        } : item);
        setList(newLis);
    }

    const onCompleted = (id, completed) => {
        const newLis = list.map(item => item.id === id ? {
            ...item,
            completed: !completed
        } : item);
        setList(newLis);
    }

    const [filter, setFilter] = useState(''); // SEARCH  'c'
    const handleChangeFilter = (e) => setFilter(e.target.value);
    const visibleList = list.filter(item => item.name.includes(filter))


    return ( <
        div style = {
            {
                width: 700,
                margin: '0 auto'
            }
        } >

        <
        TextField fullWidth label = "Search your note"
        variant = "outlined"
        value = {
            filter
        }
        onChange = {
            handleChangeFilter
        }
        />


        <
        div style = {
            {
                paddingTop: 50
            }
        } >
        <
        Box component = "form" >
        <
        TextField fullWidth label = "Name of the note"
        variant = "outlined"
        value = {
            value
        }
        onChange = {
            handleChange
        }
        /> <
        Button disabled = {
            value.length < 1
        }
        fullWidth variant = "contained"
        onClick = {
            onSave
        } > Send < /Button> <
        /Box> <
        /div>

        {
            visibleList && visibleList.map((item) => < NoteItem id = {
                    item.id
                }
                key = {
                    item.id
                }
                name = {
                    item.name
                }
                completed = {
                    item.completed
                }
                onCompleted = {
                    onCompleted
                }
                onDelete = {
                    onDelete
                }
                onUpdate = {
                    onUpdate
                }
                />
            )
        } <
        /div>
    )
}