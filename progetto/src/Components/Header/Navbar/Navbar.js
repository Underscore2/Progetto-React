import { Row, Col, } from "react-bootstrap";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import text from '../../../utilities/texts.json'
import Login from "../Login/Login";
import useNavbar from "./utilities/useNavbar";
import { store } from "../../../states/Store";

export default function Navbar() {
  useEffect(()=>{
    console.log("Render Navbar")
  },[])
const {
  password, user,
  logout, loginHandler,login
  ,setRefresh,itIsLogged
} = useNavbar()


  return (

    <div className="p-3 border-blue">
      <Row className="m-0 py-3 justify-content-center align-items-center px-2 m-0 w-100">
        <Col className="p-1 align-items-center justify-content-around flex-sm-row" xs={8} sm={9} md={7}>
          <img src={text.map(item => item.navbarLogo)} className="uovo" width="50px" height="50px" alt="logo" />
          <Link className="text-decoration-none" to={"/"}>
            LMAO Corporation
          </Link>
        </Col>
        <Col xs={4} sm={3} md={5} className="d-md-flex p-1 justify-content-end align-items-center p-0 m-0">
          <ul className="gx-5 list-unstyled d-md-flex d-none justify-content-sm-end p-0 m-0 gap:5">
            <li>
              <Link className="text-decoration-none px-2" to={"/"}>Home</Link>
            </li>
            {user && password ? <li>
              <Link className="text-decoration-none px-2" to={"/dashboard"}>Dashboard</Link>
            </li> : null}
            <li>
              <Link className="text-decoration-none px-2" to={"pricing"}>Pricing</Link>
            </li>
            {user && password ?
              <li>
                <Link className="text-decoration-none px-2" onClick={logout} replace to={'/'}>Log Out</Link>
              </li>
              :
              <li>
                <Link className="text-decoration-none px-2" to={'/'}><span onClick={loginHandler}>Login</span></Link>
              </li>
            }
            {user && password ?
              null :
              <li>
                <Link className="text-decoration-none px-2" to={"signup"}>Sign Up</Link>
              </li>}
          </ul>
          <a className='d-flex justify-content-center d-md-none' href="!#">
            <img src={text.map(item => item.navbarHamburger)} width='50px' height="50px" className='' alt=''></img>
          </a>
        </Col>
      </Row>
        <Login />
    </div>
  )
}
