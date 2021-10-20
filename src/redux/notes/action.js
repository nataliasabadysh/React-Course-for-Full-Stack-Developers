import { SET_NOTE, DELETE_NOTE } from "./types";


export const setNote = (property) => {
    return{
        type: SET_NOTE,
        payload: property
    }
}


export const deleteNote = (id) => ({
    type: DELETE_NOTE,
    payload: {
        id
    }
})