import { useState, useRef, useContext } from "react"
import { useNavigate } from "react-router-dom";
import { loginContext } from "../../Navbar/Navbar";
export default function useLogin() {
    const passwordRef = useRef('password')
    const emailRef = useRef('email')
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { loginStatusChanger, setLoginStatusChanger } = useContext(loginContext)


    function handleEmail() {
        setEmail(emailRef.current.value)
        console.log("email: ", email)

    }

    function handlePassword() {
        setPassword(passwordRef.current.value)
        console.log("password: ", password)
    }

    function storagePush() {

        localStorage.setItem("email", email)
        localStorage.setItem("password", password)

        navigate("/")
        window.location.reload(true)

        return setLoginStatusChanger(false)
    }

    function handleClose() {
        console.log("Mi sto chiudendo")
        return setLoginStatusChanger(false)
    };

    return {
        handleEmail, handlePassword,
        storagePush, handleClose,
        emailRef, passwordRef,
        loginStatusChanger
    }
}
