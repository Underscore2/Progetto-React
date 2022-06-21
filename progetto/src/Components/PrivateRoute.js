import { Navigate, Outlet } from "react-router-dom";

const user = localStorage.getItem('email');
const password = localStorage.getItem('password');

export default function protectRoute(children) {

    if (!user && !password) {
        return <Navigate to='/' replace />
    }

    return (
        <>
            < Outlet />
        </>)


}

