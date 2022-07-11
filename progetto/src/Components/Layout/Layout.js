import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar/Navbar"
export default function Layout() {
    useEffect(()=>{
        console.log("Render Layout")
    },[])
    return (
        <>
            <Navbar />
        </>
    )
}


