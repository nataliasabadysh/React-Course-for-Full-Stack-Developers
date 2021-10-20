import { SET_NOTE, DELETE_NOTE } from "./types";


export const notesReducer = (state = [], { type, payload}) => {

    switch(type){
        case SET_NOTE: {
            return [...state, payload]
        }

        case DELETE_NOTE: {
            const newNoteList = state.filter(item => item.id !== payload.id);
             return newNoteList
        }

        default: {
            return state
        }
    }
}