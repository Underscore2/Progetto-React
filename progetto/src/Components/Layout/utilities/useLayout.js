import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { loginSlice, usersSlice } from "../../../states/stateLogin";
import { store } from "../../../states/Store";
export default function useNavbar() {
    const dispatch= useDispatch()
    const password = localStorage.getItem('password');
    const user = localStorage.getItem('email')
    const [refresh, setRefresh] = useState(false)
    const itIsLogged=useSelector(()=> store.getState().login)

    function logout() {
        return (
            localStorage.clear(),
            dispatch(usersSlice.actions.reset()),
           dispatch(loginSlice.actions.logout())
            
        )
    }


    return {
        password, user,setRefresh,
        logout,itIsLogged
    }



}