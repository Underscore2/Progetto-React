import Homepage from "./Components/Body/Homepage/Homepage.js";
import Dashboard from "./Components/Body/Dashboard/Dashboard";
import { Link, Routes, Route } from "react-router-dom";
import "./style/App.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Layout from "./Components/Layout/Layout";
import Navbar from "./Components/Header/Navbar/Navbar.js";
import Hero from "./Components/Body/Homepage/Hero/Hero.js";
import PrivateRoute from "./Components/PrivateRoute"
import { Provider } from "react-redux";
import { store } from "./states/Store.js";
import Description from "./Components/Body/Homepage/Description/Description.js";
import List from "./Components/Body/Homepage/List/List.js";

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
        <Provider store={store}>
        <div className="App container-xxl p-0">
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route index element={<Hero />} />
                    <Route path="/info" element={<Description/>}/>
                    <Route path="/pricing" element={<List/>}/>
                </Route>
                

                <Route path="*" element={<NoMatch />} />



                <Route element={<PrivateRoute />}>
                    <Route path="/" element={<Layout />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Route>
                </Route>

            </Routes>
        </div>
        </Provider>
    );
}