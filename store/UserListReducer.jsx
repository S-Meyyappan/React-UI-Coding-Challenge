const initialState = {
    list : [],
    successmsg: "",
    errmsg : ""
}

export const UserlistReducer = (state = initialState, action) => {

    switch(action.type){
        
        case 'GET_ALL_SUCCESS':
            return{
                ...state,
                list : action.payload,
                successmsg : "Fetched Users Successfully",
                errmsg : ""
            }
        case 'GET_ALL_FAILURE':
            return{
                ...state,
                errmsg : action.payload,
                successmsg : ""
            }
        case 'DELETE_USER':
            return{
                ...state,
                list : state.list.filter((u) => u.id !== action.payload)
            }
        default:
            return state
    }

}