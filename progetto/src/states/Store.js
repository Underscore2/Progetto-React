import { configureStore } from "@reduxjs/toolkit"
import { modalLoginSlice, usersSlice } from "./stateLogin"
import { modalSignupSlice } from "./stateSignUp"



export const store = configureStore({
    reducer:
    {
        modalLogin: modalLoginSlice.reducer,
        modalSignup: modalSignupSlice.reducer,
        users: usersSlice.reducer
    }
})


