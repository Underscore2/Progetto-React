import Homepage from "./Components/Body/Homepage.js";
import Dashboard from "./Components/Dashboard/Dashboard";
import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./css/helper-class.css";
import Layout from "./Components/Layout/Layout";
import Login from "./Components/Login";

function NoMatch() {
    return (
        <div>
            <h2 className={"white-modules font-primary text-center"}>Nothing to see here!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
}

export default function App() {
  return (
    <div className="App bgblack">
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Homepage/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/login" element={<Login/>}/>

                {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for.*/}
                <Route path="*" element={<NoMatch/>}/>
            </Route>
        </Routes>
    </div>
  );
}