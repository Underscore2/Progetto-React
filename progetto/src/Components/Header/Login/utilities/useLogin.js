/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { store } from "../../../../states/Store";
import { modalLoginSlice, usersSlice } from "../../../../states/stateLogin";
import { encrypt } from "../../../../utilities/encrypt";
import NavbarContext from "../../../../Contexts/NavbarContext";
export default function useLogin(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, setLogin] = useState(store.getState().modal);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [refresh, setRefresh] = useState(false);
  const inptEmail = document.querySelector("#email");
  const inptPassword = document.querySelector("#password");
  const context = useContext(NavbarContext)
  
  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  function storagePush(event) {
    if (event.target.innerHTML === "testDev") {
      console.log(event.target.innerHTML);
      localStorage.setItem("email", encrypt(email));
      localStorage.setItem("password", encrypt(password));
      setLogin(dispatch(modalLoginSlice.actions.inactive()));
      dispatch(
        usersSlice.actions.add({
          email: encrypt(email),
          password: encrypt(password),
          authorized: true,
        }),
        props.setRefresh(f=>!f)
      );
      setEmail("");
      setPassword("");
    }
    if (inptEmail && inptPassword) {
      fetch("http://localhost:3001/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then((data) => data.json())
        .then((data) => {
         
          if (data.authorized) {
            return (
              localStorage.setItem("token", data.token),
              setLogin(dispatch(modalLoginSlice.actions.inactive())),
              dispatch(
                usersSlice.actions.add({
                  user: encrypt(data.username),
                  email: encrypt(data.email),
                  token: data.token,
                  authorized: true,
                })
                ),
                context.setRefresh(f=>!f),
                navigate('/dashboard')
                );
          } else {
            return( localStorage.clear(),
            setPassword(""));
          }
        })
        .catch((err) => console.error(err));
     
      setEmail("");
      setPassword("");
    }
  }

  function handleClose() {
    setLogin(dispatch(modalLoginSlice.actions.inactive()));
    setEmail("");
    setPassword("");
  }

  return {
    handleEmail,
    handlePassword,
    storagePush,
    handleClose,
    email,
    password,
  };
}
