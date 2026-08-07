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

export const deleteUser = (id) => ({
    type : "DELETE_USER",
    payload : id
})