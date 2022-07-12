import { Row, Col, } from "react-bootstrap";
import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import text from '../../utilities/texts.json'
import Login from "../Login/Login";
import useLayout from "./utilities/useLayout";
import { decrypt, key } from "../../utilities/encrypt"
export default function Navbar() {

  const { logout, itIsLogged, user } = useLayout()

  useEffect(() => {
    console.log("Render Layout")
    console.log(itIsLogged)
  }, [])

  return (
    <div>
      {/* HIGH NAVBAR*/}
      <Row className=" highnav-vh row w-100 m-0 p-0 d-none d-md-flex">
        <Col className='col-md-3 d-flex justify-content-start align-items-center px-0'>
          <img src={text.map(item => item.navbarLogo)} className="uovo" width="60px" height="60px" alt="logo" />
          <Link className="text-decoration-none fw-bold fs-5 ms-2 navbar-title" to={"/"}>
            LMAO Corporation
          </Link>
        </Col>
        <Col className='col-md-2 offset-md-7 d-flex justify-content-end align-items-center'>
          {itIsLogged ?
            <Link className="text-decoration-none w-100 text-end px-2 link" onClick={logout} replace to={'/'}><span className='link'>Log Out</span></Link>
            :
            <Link className="text-decoration-none w-100 px-2 text-center" to={"signup"}><span className='link'>Sign Up</span></Link>
          }
        </Col>
      </Row>
      {/* HIGH NAVBAR*/}

      {/* SIDE NAVBAR*/}
      <Row className='w-100 p-0 m-0'>
        <Col style={{ borderRight: "1px solid black" }} className='col-3 col-xxl-2 px-0 py-2 side-nav side-nav side-nav-color d-none d-md-flex flex-column justify-content-around align-items-center'>
          <div className='d-flex w-100 flex-column justify-content-center gap-5 align-items-center'>
            {!itIsLogged ?
              <div className="side-nav-links w-100 p-2 text-center">
                <Link to={"/"} className="d-flex align-items-center justify-content-start gap-4 text-decoration-none">
                  <img height={20} width={20} src={text.map(item => item.homesvg)}></img> Home </Link></div>
              : null
            }
            {!itIsLogged ?
              <div className="side-nav-links w-100 p-2 text-center">
                <Link to={"/info"} className="d-flex align-items-center justify-content-start gap-4 text-decoration-none">
                  <img height={20} width={20} src={text.map(item => item.servicesvg)}></img> Service </Link></div>
              : null
            }
            {!itIsLogged ?
              <div className="side-nav-links w-100 p-2 text-center">
                <Link to={"/pricing"} className="d-flex align-items-center justify-content-start gap-4 text-decoration-none">
                  <img height={20} width={20} src={text.map(item => item.pricingsvg)}></img> Pricing </Link></div>
              : null
            }

            {
              itIsLogged ?  <div className="justify-content-center align-items-center d-flex flex-column">
                <img height={100} width={100} src={text.map(item => item.usersvg)}></img>
                <h3 className="text-break">Bentornato</h3>
                <p className="text-break">{decrypt(user, key)}</p>
              </div>
              
                : null
            }

          {  itIsLogged ?
              <div className="side-nav-links w-100 p-2 text-center">
                <Link to={"/dashboard"} className="d-flex align-items-center justify-content-start gap-4 text-decoration-none">
                  <img height={20} width={20} src={text.map(item => item.pricingsvg)}></img>Dashboard </Link></div>
              : null
            }
          </div>
          <div className='d-flex w-100 flex-column justify-content-end gap-5 align-items-center'>
            <Row
              className="w-100 text-center p-0 m-0 bg-white d-none d-xl-flex justify-content-between" id='news'>
              <Col className="col-11 col-xl-10 px-0 d-flex flex-column justify-content-center align-items-center py-1">
                <p>We beat the market<span className="description"> 9 out of 10 years.</span> Average yearly return of<span className="description"> 35.4% </span></p>
                <Row className="w-100 d-flex justify-content-center align-items-center px-5 px-xl-1">
                  <Col className="col-8 col-xxl-12 px-0 d-flex justify-content-start align-items-center py-1"> <input type="email" placeholder="Your email" className='w-100 me-2'></input></Col>
                  <Col className="col-4 col-xxl-12 px-0 d-flex justify-content-start align-items-center py-1"> <button className='w-100 join'>Join now</button></Col>
                </Row>
              </Col>
              <Col className="col-1 col-xl-2 newsletter d-flex justify-content-center align-items-center">
                <div className="newsletter2 text-center ">Newsletter</div>
              </Col>
            </Row>

            <div className="side-nav-links w-100 p-2 text-center">
              <Link to={"/"} className=" d-flex align-items-center justify-content-start gap-4 text-decoration-none">
                <img height={20} width={20} src={text.map(item => item.contactsvg)}></img> Contact Us </Link>
            </div>

          </div>
        </Col>
        <Col className="col-9 col-xxl-10 p-0">
          <Outlet />
          

        </Col>
      </Row>
      {/* HIGH NAVBAR*/}

      <div className="bg-media w-100 d-md-none">
        <Row className="w-100 h-100 p-0 m-0 ">
          <Col className="col-12 p-4 d-flex flex-column justify-content-evenly">
            <h1 className="media-title w-100">Trading.<br></br> is never been.<br></br>
              so EASY.
            </h1>
            <Login />
          </Col>
          <Col className='col-12 d-flex justify-content-around gap-3 align-items-end p-3'>
            <button className="join-button text-center"><Link to={"/info"} className='text-decoration-none'>Info </Link></button>
            <button className="join-button text-center"><Link to={"/pricing"} className='text-decoration-none'>Price </Link></button>
          </Col>
        </Row>
      </div>
    </div>
  )
}