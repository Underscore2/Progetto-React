import { configureStore } from "@reduxjs/toolkit"
import { loginSlice, usersSlice } from "./stateLogin"



export const store = configureStore({
    reducer:
    {
        login: loginSlice.reducer,
        users: usersSlice.reducer
    }
})


