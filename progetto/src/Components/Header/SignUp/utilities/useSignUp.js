/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { store } from "../../../../states/Store";
import { modalSignupSlice } from "../../../../states/stateSignUp";

export default function useSignUp() {
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
        if (data.authorized === true) {
            return(
            localStorage.setItem("email",email),
            localStorage.setItem("password",password),
            dispatch(modalSignupSlice.actions.inactive()),
            navigate("/")
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
