import { useState, } from "react"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { store } from "../../../../states/Store";
import { modalSlice,usersSlice } from "../../../../states/stateLogin";
export default function useLogin() {
    const dispatch=useDispatch()
    const navigate = useNavigate();
    const [login,setLogin]=useState(store.getState().modal)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [refresh, setRefresh] = useState(false)
  
    function handleEmail(event) {
        setEmail(event.target.value)

    }

    function handlePassword(event) {
        setPassword(event.target.value)
    }

    function storagePush() {
        localStorage.setItem("email", email)
        localStorage.setItem("password", password)
        setLogin(dispatch(modalSlice.actions.inactive()))
        dispatch(usersSlice.actions.add({email: email, password: password, status:'authorized'}))
        setEmail("")
        setPassword("")

    }

    function handleClose() {
       setLogin(dispatch(modalSlice.actions.inactive()))
       setEmail('')
       setPassword('')

    };

    return {
        handleEmail, handlePassword,
        storagePush, handleClose,
        email,password
    }
}
