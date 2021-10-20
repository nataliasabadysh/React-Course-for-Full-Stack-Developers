// Core
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
// Components 

// Instruments
// Actions
import { fetchContacts, addContacts } from './redux/contacts/actions';
import { SelectLocation } from './component/SelectLocation/SelectLocation';
import { TextField } from '@material-ui/core';

const columns = [
  { field: 'name', headerName: 'First name', width: 300 },
  { field: 'number', headerName: 'Number', width: 300 },
  { field: 'location', headerName: 'Location', width: 230 },
];

const rows = [
    {
      name: "Alex",
      location: "UK",
      number: "06641343333",
      id: "0b0fb494-67fc-4f65-86fe3-61d5351b5096"
    },{
      name: "Chris",
      location: "Israel",
      number: "86641343333",
      id: "0b0fb494-67fc-4feee-86f3-61d5351b5096"
    }
  ]


function App() {
  const dispatch = useDispatch();

    const fromFromFields = {
      "name": "Alex 2",
      "number": "0939226777(2)",
      "lacation": "Australia",
      "id": uuidv4(),
    }

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  const onSave = () => {
    // check the newContactObj 
    // if(existContact)
    toast.info(`09355444554 is already exist !`)
    // else 
    // dispatch(addContacts(fromFromFields))
  }


  return (
    <div style={{ width: 900 }}>
      <TextField id="filled-basic" label="Enter name" variant="standard"  />
      <TextField id="standard-basic" label="Enter number" variant="standard" />
      <SelectLocation />

      <Button variant="contained" endIcon={<SendIcon />} onClick={onSave}>
        Send
      </Button>

      <div style={{ height: 400, width: 850 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;