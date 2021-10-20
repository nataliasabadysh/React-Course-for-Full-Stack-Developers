


// Sync

// Async
export const fetchContacts = () => (dispatch) => {
    fetch('http://localhost:5005/contacts').then(response => response.json()).then(data => console.log('fetch data',data))
}

// Async
export const addContacts = (newContactOnj) => (dispatch) => {
    fetch('http://localhost:5005/contacts',{   
        method: "POST", 
        body: JSON.stringify(newContactOnj), 
        headers: { "Content-Type": "application/json" }  
    }).then(response => response.json()
    ).then(data => console.log('response',data)) // response need to add to the GlobalSState ( [...prevState, data])
}
