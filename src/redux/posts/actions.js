import {
    FILL_POST,
    CHANGE_TAG
} from "./types";


export const fillPost = (data) => {
    return {
        type: FILL_POST,
        payload: data

    }
}

export const changeTag = (value) => {
    return {
        type: CHANGE_TAG,
        payload: value

    }
}

