import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { modalSlice } from "../../../../states/stateLogin";
import { store } from "../../../../states/Store";
export default function useNavbar() {
    const dispatch= useDispatch()
    const password = localStorage.getItem('password');
    const user = localStorage.getItem('email')
    const [refresh, setRefresh] = useState(false)
    const itIsLogged=useSelector(()=> store.getState().modal)

    function logout() {
        return (
           
            localStorage.clear(),
            setRefresh(c=>!c)

        )
    }

    function loginHandler() {
        return (
          dispatch(modalSlice.actions.active())
             
        )
    }

    return {
        password, user,setRefresh,
        logout,loginHandler,itIsLogged
    }



}