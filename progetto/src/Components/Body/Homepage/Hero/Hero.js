import React, { useEffect } from "react";
import text from "../../../../utilities/texts.json";
import { Row, Col, Form, Button } from "react-bootstrap";
import Login from "../../../Header/Login/Login";
import Footer from "../../../Footer/Footer"

function Hero() {
  useEffect(() => {
    console.log("Render Hero")
  }, [])
  return (
    
          <div className="bg-hero w-100 d-none d-md-flex p-0 flex-column">
        <Row className="w-100 h-100 p-0 m-0">
          <Col className="col-12 d-flex flex-column justify-content-evenly">
            <h1 className="media-title w-100 text-center">Trading is never been
              so EASY.
            </h1>
            <Login />
          </Col>
        </Row>
        <Footer/>
      </div>
          )

}


export default Hero;
/*   <section className="bg-hero hero-container ">
    <Row className="p-0 m-0">
      <Col className="col-8 d-flex justify-content-end p-5"> <h1 className=" m-0 hero-title w-100">{item.title}</h1></Col>
      <Col className="col-4 d-flex justify-content-end p-5">
        <img src={item.iphoneMockup} width={350} height={690}></img>
      </Col>
    </Row>
  </section> */