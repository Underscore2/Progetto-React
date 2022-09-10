/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import "../../../../css/helper-class.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import text from "../../../../utilities/texts.json";
import { Link } from "react-router-dom";
import useNavbar from "../utilities/useNavbar";

export function OffCanvasExample({ name, ...props }) {

  let token =localStorage.getItem("token")
  useEffect(()=>{
       token = localStorage.getItem("token")
    
  },[])
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { signUpHandler } = useNavbar();

  return (
    <div className="d-flex justify-content-end">
      <a variant="primary" onClick={handleShow} className="me-2 d-md-none ">
        <img
          src={text.map((item) => item.navbarHamburger)}
          width="50px"
          height="auto"
          alt=""
        ></img>
      </a>
      <Offcanvas
        show={show}
        onHide={handleClose}
        {...props}
        className="bg-dark"
      >
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <img
            src={text.map((item) => item.navbarLogo)}
            className="uovo"
            style={{ width: "50px", height: "auto" }}
            alt="logo"
          />
          <span className="text-decoration-none font-secondary" to={"/"}>
            LMAO Corporation
          </span>

          <ul className="gx-5 list-unstyled justify-content-sm-end p-0 mt-4 gap:5">
            <li>
              <Link
                className="text-decoration-none px-2 font-secondary"
                to={"/"}
              >
                Home
              </Link>
            </li>
            {token ? (
              <li>
                <Link
                  className="text-decoration-none px-2 font-secondary"
                  to={"/dashboard"}
                >
                  Dashboard
                </Link>
              </li>
            ) : null}
            {token ? (
              <li>
                <Link
                  className="text-decoration-none px-2 font-secondary"
                  onClick={props.logout}
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
                  <span onClick={props.loginHandler}>Login</span>
                </Link>
              </li>
            )}
            {token ? null : (
              <li>
                <Link
                  className="text-decoration-none px-2 font-secondary"
                  to={"/"}
                >
                  <span onClick={signUpHandler}>Sign up</span>
                </Link>
              </li>
            )}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
