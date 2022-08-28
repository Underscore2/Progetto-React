import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalLoginSlice, usersSlice } from "../../../../states/stateLogin";
import { modalSignupSlice } from "../../../../states/stateSignUp";
import { store } from "../../../../states/Store";
export default function useNavbar() {
  const dispatch = useDispatch();
  const password = localStorage.getItem("password");
  const user = localStorage.getItem("email");
  const [refresh, setRefresh] = useState(false);
  const itIsLogged = useSelector(() => store.getState().modal);

  function logout() {
    return (
      localStorage.clear(),
      dispatch(usersSlice.actions.reset()),
      setRefresh((c) => !c)
    );
  }

  function loginHandler() {
    return setRefresh((c) => !c), dispatch(modalLoginSlice.actions.active());
  }

  function signUpHandler() {
    return setRefresh((c) => !c), dispatch(modalSignupSlice.actions.active());
  }

  return {
    password,
    user,
    setRefresh,
    logout,
    loginHandler,
    itIsLogged,
    signUpHandler,
  };
}
