import {
    FILL_POST,
    START_LOADING,
    STOP_LOADING,
    SET_ERROR
} from "./types";


// Sync
export const fillPostSync = (data) => {
    return {
        type: FILL_POST,
        payload: data

    }
}

export const startLoading = {
    type: START_LOADING,
}

export const stopLoading = {
    type: STOP_LOADING,
}

export const setErrorMessage = (msg) => ({
    type: SET_ERROR,
    payload: msg
})


// Async
export const fetchPost = (params) => (dispatch) => {
    dispatch(startLoading)
    fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(data => dispatch(fillPostSync(data)))
        .catch(error => setErrorMessage(error))
        .finally(() => dispatch(stopLoading))
}
