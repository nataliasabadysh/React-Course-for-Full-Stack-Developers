import { useEffect, useState } from "react";
import { userApi } from "src/api/user-api";



const fetchUser = async () => {

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    
        if(!response.ok){ // response.ok, response.status, esponse.status !== 200
            return console.log(`something wrong happened, response.status: ${response.status}`)
        }
        else { 
            return response.json()
        }
    }

    catch (error) {
        console.log('error from the server:', error);
      }
}


export const User = () => {

    const [user, setUser] = useState({})
    const [error, setError] = useState(null)
    
    // useEffect(() => {
    //     //  fetchUser()
    //     //     .then(res => setUser(res))
    //     //     .catch(e=> setError(e))

    //     // userApi.getUsers(id).then(data=> console.log(data))
    // }, [])

    //     useEffect(() => {
    //         api.getUsers().then(res => console.log('api',res))
    //    }, [])

    return(
            <h1>User {user && user.name}</h1>
    )

}