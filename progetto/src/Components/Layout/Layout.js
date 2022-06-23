import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar/Navbar"
export default function Layout() {

    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}


