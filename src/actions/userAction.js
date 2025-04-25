import axios from "axios"

export const ActionTypes = {
    FETCH_USERS: 'FETCH_USERS',
}

const apiUrl = "https://68086a5c942707d722de23a8.mockapi.io/users"

export const fetchUsers = () => async (dispatch) =>{
    try {
        const response = await axios.get(`${apiUrl}`)
        dispatch({
            type: ActionTypes.FETCH_USERS,
            payload: response.data
        })
    }
    catch (error) {
        dispatch({
            type: ActionTypes.FETCH_USERS_ERROR,
        })
    }
}