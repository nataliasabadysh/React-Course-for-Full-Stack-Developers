const ROOT_API = "https://jsonplaceholder.typicode.com";


export const userApi = {

    getUsers : async (id="") => {
        try{
            const response = await fetch(`${ROOT_API}/users/${id}`, {method: "GET"});
            return response.json()
         }
         catch (error) {
             console.log('error from the server:', error);
           }
    },
    updateUsers : async () => {
        try{
            const response = await fetch(ROOT_API, {method: "PUT"});
            return response.json()
         }
         catch (error) {
             console.log('error from the server:', error);
           }
    },
    deleteUsers : async () => {
        try{
            const response = await fetch(ROOT_API, {method: "DELETE"});
            return response.json()
         }
         catch (error) {
             console.log('error from the server:', error);
           }
    }
  }
