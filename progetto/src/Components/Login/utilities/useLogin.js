import { useState, } from "react"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { store } from "../../../states/Store";
import { loginSlice,usersSlice } from "../../../states/stateLogin";
import { encrypt  } from "../../../utilities/encrypt";
export default function useLogin() {
    const dispatch=useDispatch()
    const navigate = useNavigate();
    const [login,setLogin]=useState(store.getState().modal)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [refresh, setRefresh] = useState(false)
    const inptEmail = document.querySelector('#email');
    const inptPassword = document.querySelector('#password');
  
    function handleEmail(event) {
        setEmail(event.target.value)

    }

    function handlePassword(event) {
        setPassword(event.target.value)
    }

    function storagePush(event) {
        if(event.target.innerHTML==="testDev"){
            console.log(event.target.innerHTML)
            localStorage.setItem("email", encrypt(email))
            localStorage.setItem("password", encrypt(password))
            setLogin(dispatch(loginSlice.actions.testDev()))
            dispatch(usersSlice.actions.add({email: encrypt(email), password: encrypt(password), authorized:true}))
            setEmail("")
            setPassword("")
            console.log(process.env.REACT_APP_ENCRYPT_KEY)
            
        }
        if((inptEmail.checkValidity() && inptPassword.checkValidity()) ){
        localStorage.setItem("email", encrypt(email))
        localStorage.setItem("password", encrypt(password))
        setLogin(dispatch(loginSlice.actions.login()))
        dispatch(usersSlice.actions.add({email: encrypt(email), password: encrypt(password), authorized:true}))
        setEmail("")
        setPassword("")
    }
    else{
        console.log(inptEmail.checkValidity())
        console.log(inptPassword.checkValidity())
    }
    }

    return {
        handleEmail, handlePassword,
        storagePush,
        email,password,
    }
}
