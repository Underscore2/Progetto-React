import { Row, Col, } from "react-bootstrap";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import text from '../../../utilities/texts.json'
import Login from "../Login/Login";
import useNavbar from "./utilities/useNavbar";
import { useState } from "react";
export default function Navbar() {
  const [slide, setSlide] = useState(false)
  useEffect(() => {
    console.log("Render Navbar")
  }, [])
  const {
    password, user,
    logout, loginHandler, login
    , setRefresh, itIsLogged
  } = useNavbar()

  const slideNews = () => {

    setSlide(c => !c)
    if (slide === true) {
      const news = document.querySelector('#news');
      news.classList.add("newsletter-slide-active")

    }
    else {
      const news = document.querySelector('#news');
      news.classList.remove("newsletter-slide-active")

    }

  }

  return (
    <div>
      {/* HIGH NAVBAR*/ }
      <Row className=" highnav-vh row w-100 m-0 p-0">
        <Col className='col-2 d-flex justify-content-center align-items-center'>
          <img src={text.map(item => item.navbarLogo)} className="uovo" width="60px" height="60px" alt="logo" />
          <Link className="text-decoration-none fw-bold fs-5 ms-2 navbar-title" to={"/"}>
            LMAO Corporation
          </Link>
        </Col>
        <Col className='col-3 offset-7 d-flex justify-content-evenly align-items-center'>
          {user && password ?
            <Link className="text-decoration-none w-100 text-center px-2 link" onClick={logout} replace to={'/'}><span className='link'>Log Out</span></Link>
            :
            <span className="link w-100 text-center" onClick={loginHandler}>Log In</span>
          }
          {user && password ?
            null :
            <Link className="text-decoration-none w-100 px-2 text-center" to={"signup"}><span className='link'>Sign Up</span></Link>

          }
        </Col>
      </Row>
       {/* HIGH NAVBAR*/ }

        {/* SIDE NAVBAR*/ }
      
        <div className='px-0 py-2 side-nav side-nav side-nav-color d-flex flex-column justify-content-around align-items-center'>
          <div className='d-flex w-100 flex-column justify-content-center gap-5 align-items-center'>
            <div className="side-nav-links w-100 p-2 text-center"><a> Home </a></div>
            <div className="side-nav-links w-100 p-2 text-center"><a> Service </a></div>
            <div className="side-nav-links w-100 p-2 text-center"><a> Pricing </a></div>
          </div>
          <div className='d-flex w-100 flex-column justify-content-end gap-5 align-items-center'>
            <Row
              style={{ borderTopRightRadius: "15px", borderBottomRightRadius: "15px" }}
              className=" side-nav-links w-100 text-center newsletter-slide " id='news'>
              <Col className="col-11 col-xl-10 px-0 d-flex flex-column justify-content-center align-items-center py-1">
                <p>We beat the market<span className="description"> 9 out of 10 years.</span> Average yearly return of<span className="description"> 35.4% </span></p>
                <Row className="w-100 d-flex justify-content-center align-items-center px-5 px-xl-1">
                  <Col className="col-8 px-0 d-flex justify-content-start align-items-center py-1"> <input type="email" placeholder="Your email" className='w-100 me-2'></input></Col>
                  <Col className="col-4 px-0 d-flex justify-content-start align-items-center py-1"> <button className='w-100 join'>Join now</button></Col>
                </Row>
              </Col>
              <Col className="col-1 col-xl-2 newsletter d-flex justify-content-center align-items-center">
                <div className="newsletter2 text-center ">Newsletter</div>
              </Col>
            </Row>
            <div className="side-nav-links w-100 p-2 text-center"><a> Contact Us </a></div>
          </div>
        </div>
       {/* HIGH NAVBAR*/ }
      <Login />
    </div>
  )
}
/* 
    <div className="p-1 border-blue">
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
            
            {user && password ?
              <li>
                <Link className="text-decoration-none px-2" onClick={logout} replace to={'/'}>Log Out</Link>
              </li>
              :
              <li>
                <span onClick={loginHandler}>Login</span>
              </li>
            }
            {user && password ?
              null : 
              <>
                <li>
                  <Link className="text-decoration-none px-2" to={"signup"}>Sign Up</Link>
                </li>
                <li>
                  <Link className="text-decoration-none px-2" to={"/info"}>Service</Link>
                </li>
                <li>
              <Link className="text-decoration-none px-2" to={"/pricing"}>Pricing</Link>
            </li>
              </>
            }
          </ul>
          <a className='d-flex justify-content-center d-md-none' href="!#">
            <img src={text.map(item => item.navbarHamburger)} width='50px' height="50px" className='' alt=''></img>
          </a>
        </Col>
      </Row>
      <Login />
    </div> */