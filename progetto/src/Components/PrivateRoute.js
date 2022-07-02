import { Navigate, Outlet } from "react-router-dom";
import { store } from "../states/Store";

const logged = store.getState().users.map((user => user.status === "authorized"))

export default function protectRoute(children) {

    if (logged) {

        return (
            <>
                < Outlet />
            </>)
    }
    else {
        return <Navigate to='/' replace />
    }


}



