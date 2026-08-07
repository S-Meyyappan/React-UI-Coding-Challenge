import axios from "axios"

export const getAllData = () => async (dispatch) => {

    try{
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        dispatch({
            type : "GET_ALL_SUCCESS",
            payload : response.data
        })
    }
    catch (err) {
        dispatch({
            type : "GET_ALL_FAIL",
            payload : err?.response?.data || "Unable to fetch users"
        })
    }
}

export const deleteUser = (id) => async (dispatch) => {
    try{
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        dispatch({
            type : "DELETE_USER_SUCCESS",
            payload : id
        })
    }
    catch(err){
        dispatch({
            type : "DELETE_USER_FAIL",
            payload : "Unable to delete user"
        })
    }
}

export const addUser = (data) => async (dispatch) => {
    try{
        const response = await axios.post("https://jsonplaceholder.typicode.com/users", data)
        dispatch({
            type : "ADD_USER_SUCCESS",
            payload : response.data
        })
    }
    catch(err){
        dispatch({
            type : "ADD_USER_FAIL",
            payload : "Unable to add user"
        })
    }
}