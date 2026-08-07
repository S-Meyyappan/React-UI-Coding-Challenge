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
        case 'GET_ALL_FAIL':
            return{
                ...state,
                errmsg : action.payload,
                successmsg : ""
            }
        case 'DELETE_USER_SUCCESS':
            return{
                ...state,
                list : state.list.filter((u) => u.id !== action.payload),
                successmsg: "User deleted successfully!",
                errmsg: ""
            }
        case 'DELETE_USER_FAIL':
            return{
                ...state,
                errmsg : action.payload,
                successmsg : ""
            }
        case 'ADD_USER_SUCCESS':
            return{
                ...state,
                list : [...state.list, action.payload],
                successmsg: "User added successfully!",
                errmsg: ""
            }
        case 'ADD_USER_FAIL':
            return{
                ...state,
                errmsg : action.payload,
                successmsg : ""
            }
        default:
            return state
    }

}