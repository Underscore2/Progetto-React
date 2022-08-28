import { Row, Col } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import text from "../../../utilities/texts.json";
import Login from "../Login/Login";
import useNavbar from "./utilities/useNavbar";
import { store } from "../../../states/Store";
import SignUp from "../SignUp/SignUp";
import { OffCanvasExample } from "./Offcanvas/Offcanvas";

export default function Navbar() {
  const { password, user, logout, loginHandler, signUpHandler, setRefresh } = useNavbar();
  return (
    <div className="container-xxl p-3 gradient-background">
      <Row className="m-0 py-3 white-modules justify-content-center align-items-center px-2 m-0 w-100">
        <Col
          className="p-1 align-items-center justify-content-around flex-sm-row"
          xs={8}
          sm={9}
          md={7}
        >
          <img
            src={text.map((item) => item.navbarLogo)}
            className="uovo"
            style={{ width: "50px", height: "auto" }}
            alt="logo"
          />
          <Link className="text-decoration-none font-secondary " to={"/"}>
            LMAO Corporation
          </Link>
        </Col>
        <Col
          xs={4}
          sm={3}
          md={5}
          className="d-md-flex p-1 justify-content-end align-items-center p-0 m-0"
        >
          <ul className="gx-5 list-unstyled d-md-flex d-none justify-content-sm-end p-0 m-0 gap:5">
            <li>
              <Link
                className="text-decoration-none px-2 font-secondary"
                to={"/"}
              >
                Home
              </Link>
            </li>
            {user && password ? (
              <li>
                <Link
                  className="text-decoration-none px-2 font-secondary"
                  to={"/dashboard"}
                >
                  Dashboard
                </Link>
              </li>
            ) : null}
            {user && password ? (
              <li>
                <Link
                  className="text-decoration-none px-2 font-secondary"
                  onClick={logout}
                  replace
                  to={"/"}
                >
                  Log Out
                </Link>
              </li>
            ) : (
              <li>
                <Link
                  className="text-decoration-none px-2 font-secondary"
                  to={"/"}
                >
                  <span onClick={loginHandler}>Login</span>
                </Link>
              </li>
            )}
            {user && password ? null : (
              <li>
                <Link
                  className="text-decoration-none px-2 font-secondary"
                  to={"/"}
                >
                  <span onClick={signUpHandler}>Sign Up</span>
                </Link>
              </li>
            )}
          </ul>
          <OffCanvasExample
            password={password}
            user={user}
            logout={logout}
            loginHandler={loginHandler}
          />
        </Col>
      </Row>
      <Login setRefresh={setRefresh}/>
      <SignUp />
    </div>
  );
}
