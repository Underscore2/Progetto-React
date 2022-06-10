import {Row, Col, Button} from "react-bootstrap";
import React from "react";
import {Link, Outlet} from "react-router-dom";
import logo from "../../images/egg-fill.svg";
import hamburger from "../../images/cell.svg"
export default function Navbar(){
    return (
      <div className="container-xxl p-3 gradient-background">
        <Row className="m-0 py-3 white-modules justify-content-center align-items-center px-2 m-0 w-100">
          <Col className="p-1 align-items-center justify-content-around flex-sm-row" xs={8} sm={9} md={7}>
            <img src={logo} className="uovo" style={{ width: "50px", height: "auto" }} alt="logo" />
            <Link className="text-decoration-none font-secondary " to={"/"}>
              LMAO Corporation
            </Link>
          </Col>
          <Col xs={4} sm={3} md={5} className="d-md-flex p-1 justify-content-end align-items-center p-0 m-0">
            <ul className="gx-5 list-unstyled d-md-flex d-none justify-content-sm-end p-0 m-0 gap:5">
              <li>
                      <Link className="text-decoration-none px-2 font-secondary" to={"/"}>Home</Link>
              </li>
              <li>
                    <Link className="text-decoration-none px-2 font-secondary" to={"/login"}>Login</Link>
              </li>
              <li>
                    <Link className="text-decoration-none px-2 font-secondary" to={"signup"}>Sign Up</Link>
              </li>
            </ul>
            <a className='d-flex justify-content-center d-md-none' href="!#">
            <img src={hamburger} width='50px' height='auto' className=''></img>
            </a>
          </Col>
        </Row>
          <Outlet/>
      </div>

    )

  }
