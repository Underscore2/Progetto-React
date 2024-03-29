import { createSlice } from "@reduxjs/toolkit"

export const modalLoginSlice = createSlice({
    name: 'modalLogin',
    initialState: false,
    reducers: {
        active: (state, action) => state = true,
        inactive: (state, action) => state = false,
    }
})

export const usersSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        add: (state, action) => [...state, action.payload],
        reset: (state, action) => state = []
    }
})