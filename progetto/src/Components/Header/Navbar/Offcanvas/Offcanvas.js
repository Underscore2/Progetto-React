import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import text from "../../../../utilities/texts.json";
import { Link } from "react-router-dom";

export function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="d-flex justify-content-end">
      <a variant="primary" onClick={handleShow} className="me-2 d-md-none ">
        <img
          src={text.map((item) => item.navbarHamburger)}
          width="50px"
          height="auto"
          classNameName=""
          alt=""
        ></img>
      </a>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <ul className="gx-5 list-unstyled justify-content-sm-end p-0 m-0 gap:5">
            <li>
              <Link
                className="text-decoration-none px-2 font-secondary"
                to={"/"}
              >
                Home
              </Link>
            </li>
            {props.user && props.password ? (
              <li>
                <Link
                  className="text-decoration-none px-2 font-secondary"
                  to={"/dashboard"}
                >
                  Dashboard
                </Link>
              </li>
            ) : null}
            {props.user && props.password ? (
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
            {props.user && props.password ? null : (
              <li>
                <Link
                  className="text-decoration-none px-2 font-secondary"
                  to={"signup"}
                >
                  Sign Up
                </Link>
              </li>
            )}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
