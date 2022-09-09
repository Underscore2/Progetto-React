/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { store } from "../../../../states/Store";
import { modalSignupSlice } from "../../../../states/stateSignUp";
import { usersSlice } from "../../../../states/stateLogin";
import { encrypt } from "../../../../utilities/encrypt";
import NavbarContext from "../../../../Contexts/NavbarContext";

export default function useSignUp() {
  const context = useContext(NavbarContext)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signup, setSignup] = useState(store.getState().modal);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreements, setAgreements] = useState(false);

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  function handleAgreement(event) {
    setAgreements(event.target.checked);
  }

  function handleUsername(event) {
    setUsername(event.target.value);
  }

  function handleClose() {
    setSignup(dispatch(modalSignupSlice.actions.inactive()));
    setEmail("");
    setPassword("");
  }

  function submitLogin(event) {
    event.preventDefault();
    fetch("http://localhost:3001/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        username: username,
        password: password,
        agreement: agreements,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data)
        if (data.user.id) {
            return(

            localStorage.setItem("email",email),
            localStorage.setItem("password",password),
            dispatch(modalSignupSlice.actions.inactive()),
            dispatch(
              usersSlice.actions.add({
                user: encrypt(data.username),
                email: encrypt(data.email),
                token: data.token,
                authorized: true,
              }),
              ),
            localStorage.setItem("token",data.token),
            context.setRefresh(f=>!f)
            
            )
        }
      })
      .catch((err) => console.log(err));
  }
  return {
    submitLogin,
    handleClose,
    handleEmail,
    handlePassword,
    handleAgreement,
    handleUsername,
  };
}
