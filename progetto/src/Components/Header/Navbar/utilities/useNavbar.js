import { useState } from "react";

export default function useNavbar() {

    const password = localStorage.getItem('password');
    const user = localStorage.getItem('email')
    const [refresh, setRefresh] = useState(false)
    const [loginStatusChanger, setLoginStatusChanger] = useState(false)

    function logout() {
        return (
            localStorage.clear(),
            setRefresh((c) => !c)

        )
    }

    function loginHandler() {
        return (
            setLoginStatusChanger((l) => !l)
        )
    }

    return {
        password, user,
        loginStatusChanger,
        setLoginStatusChanger, logout,
        loginHandler
    }



}