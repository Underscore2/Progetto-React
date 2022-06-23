import React from "react";
import { Navigate } from "react-router-dom";
const user = localStorage.getItem('email');
const password = localStorage.getItem('password');

export default function Dashboard() {
    if (!user || !password) {
        console.log("Non ho trovato user ed email")
        return <Navigate to='/' replace />
    }
    return (
        <>
            {console.log(`Ho trovato ${user} ed ${password}`)}
            <h1 style={{ color: "red" }} className={"white-modules text-center"}>CIAO SONO LA DASHBOARD</h1>
        </>
    )
}