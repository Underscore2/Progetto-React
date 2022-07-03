import { Navigate, Outlet } from "react-router-dom";
import { store } from "../states/Store";


let logged = false;
export default function protectRoute(children) {
    store.getState().users.map((user =>
        user.authorized === true
      ? logged = true : logged = false))


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



