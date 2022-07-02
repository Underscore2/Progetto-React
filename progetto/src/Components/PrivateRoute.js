import { Navigate, Outlet } from "react-router-dom";
import { store } from "../states/Store";

const user = localStorage.getItem('email');
const password = localStorage.getItem('password');

export default function protectRoute(children) {

    if (store.getState().users.map((user => user.status === "authorized"))) {

        return (
            <>
                < Outlet />
            </>)
    }
    else {
        return <Navigate to='/' replace />
    }


}



