import { useState, } from "react"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { store } from "../../../../states/Store";
import { modalSignupSlice, usersSlice } from "../../../../states/stateSignUp"

export default function useSignUp() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [signup, setSignup] = useState(store.getState().modal)
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [agreements, setAgreements] = useState(false)

    function handleEmail(event) {

        setEmail(event.target.value)

    }

    function handlePassword(event) {

        setPassword(event.target.value)
    }

    function handleAgreement(event) {

        setAgreements(event.target.checked)
    }

    function handleUsername(event) {
        setUsername(event.target.value)
    }


    function handleClose() {
        setSignup(dispatch(modalSignupSlice.actions.inactive()))
        setEmail('')
        setPassword('')

    };

    function submitLogin(event) {
        event.preventDefault()
        console.log(username)
        console.log(agreements)
        console.log(email)
        console.log(password)

    }
    return { submitLogin, handleClose, handleEmail, handlePassword, handleAgreement, handleUsername }

}