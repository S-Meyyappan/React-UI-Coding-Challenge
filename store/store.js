import { configureStore } from "@reduxjs/toolkit";
import { UserlistReducer } from "./UserListReducer";
import { TableReducer } from "./TableReducer";

export default configureStore({
    reducer : {
        user : UserlistReducer,
        products : TableReducer
    }
})