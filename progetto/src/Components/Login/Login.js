import { Button, Modal, Form, } from "react-bootstrap";
import React, { useEffect } from "react";
import useLogin from "../Login/utilities/useLogin.js";

export default function Login() {
    useEffect(() => {
        console.log("Render Login")
    })
    const {
        handleEmail, handlePassword,
        storagePush,
        email, password
    } = useLogin()


    return (
        <>
            <form className="d-md-flex w-100 justify-content-center">
                <div><input className="rounded-3 m-1 p-1"
                    onChange={handleEmail}
                    type="email"
                    id="email"
                    name='email'
                    value={email}
                    pattern="[a-zA-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    required={true}
                    autoFocus
                    placeholder="email"></input></div>
                <div><input className="rounded-3 m-1 p-1"
                    id="password"
                    onChange={handlePassword}
                    name='password'
                    type="password"
                    value={password}
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    required={true}
                    placeholder="password"></input> <button onClick={storagePush} className="login-button">Login</button>
                    <button type="submit" className="login-button" onClick={storagePush} >
                        testDev
                    </button></div>
            </form>
        </>
    );
}
