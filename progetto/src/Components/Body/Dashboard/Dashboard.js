import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { store } from "../../../states/Store";
const user = localStorage.getItem('email');
const password = localStorage.getItem('password');
export default function Dashboard() {

   if (store.getState().users.map((user=>user.status==="authorized"))) {
    return (
        <>
        <h1 style={{ color: "red" }} className={"white-modules text-center"}>CIAO SONO LA DASHBOARD</h1>            
         </>
    )
    }
    else return(
       <Navigate to='/Giangischi' replace />
    )

    
}