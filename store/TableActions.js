import axios from "axios"

export const getAllInfo = () => async ( dispatch ) => {
    try{
        const response = await axios.get("https://fakestoreapi.com/products")
        dispatch({
            type : "GET_ALL_INFO_SUCCESS",
            payload : response.data
        })
    }
    catch( err ){
        dispatch({
            type : "GET_ALL_INFO_FAIL",
            payload : err?.response?.data || "Unable to fetch products"
        })
    }
}