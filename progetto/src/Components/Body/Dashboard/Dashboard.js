import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { store } from "../../../states/Store";
export default function Dashboard() {

   let logged = false;
useEffect(()=>{
   console.log("Render Dashboard")
},[])
   store.getState().users.map((user =>
      user.authorized === true
    ? logged = true : logged = false))


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