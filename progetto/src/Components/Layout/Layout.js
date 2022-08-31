import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar/Navbar"
import NavbarContext from "../../Contexts/NavbarContext";
import { useState } from "react";
export default function Layout() {
    const [refresh,setRefresh]=useState(false)
    return (
        <div>
            <NavbarContext.Provider value={{refresh,setRefresh}}>
            <Navbar />
            </NavbarContext.Provider>
            <Outlet />
            <Footer />
        </div>
    )
}


