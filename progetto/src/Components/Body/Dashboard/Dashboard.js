import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { store } from "../../../states/Store";
const logged = store.getState().users.map((user=>user.status==="authorized"));
export default function Dashboard() {

   if (logged) {
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