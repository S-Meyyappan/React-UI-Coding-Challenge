const initialState = {
    list : [],
    successmsg : "",
    errmsg : ""
}

export const TableReducer = (state = initialState, action) => {

    switch(action.type){
        case "GET_ALL_INFO_SUCCESS":
            return{
                ...state,
                list : action.payload,
                successmsg : "All products fetched"
            }
        case "GET_ALL_INFO_FAIL":
            return{
                ...state,
                errmsg : action.payload
            }
        default :
            return state
    }
}