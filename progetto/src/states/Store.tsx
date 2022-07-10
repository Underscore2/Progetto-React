import { configureStore } from "@reduxjs/toolkit"
import { modalSlice, usersSlice } from "./stateLogin"



export const store = configureStore({
    reducer:
    {
        modal: modalSlice.reducer,
        users: usersSlice.reducer
    }
})


