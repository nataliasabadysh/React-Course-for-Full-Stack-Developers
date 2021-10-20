import { FILL_POST, CHANGE_TAG} from "./types";

export const postsReducer = (state =  [], { type, payload }) => {
    switch(type){
        case FILL_POST: {
            return payload
        }
        default: {
            return state
        }
    }   
}


export const tagReducer = (state = '', { type, payload }) => {
    switch(type){
        case CHANGE_TAG: {
            return payload
        }
        default: {
            return state
        }
    }
}

