import { Navigate, Outlet } from "react-router-dom";


export default function protectRoute(children) {
 const token = localStorage.getItem("token");

  if (token != null) {
    return (
      <>
        <Outlet />
      </>
    );
  } else {
    return <Navigate to="/" replace />;
  }
}
