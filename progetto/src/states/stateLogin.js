import { createSlice } from "@reduxjs/toolkit"

export const loginSlice = createSlice({
    name:'login',
    initialState:false,
    reducers:{
        testDev : (state, action)=> state = true,
        login : (state, action)=> state = true,
        logout : (state,action)=>state=false
    }
})

export const usersSlice=createSlice({
    name:'users',
    initialState:[],
    reducers:{
        add: (state,action)=> [...state,action.payload],
        reset:(state,action)=> state = []
    }
})