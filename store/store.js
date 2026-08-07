import { configureStore } from "@reduxjs/toolkit";
import { UserlistReducer } from "./UserListReducer";

export default configureStore({
    reducer : {
        user : UserlistReducer
    }
})