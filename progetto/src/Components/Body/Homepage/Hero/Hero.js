import React, { useEffect } from "react";
import text from "../../../../utilities/texts.json";
import { Row, Col, Form, Button } from "react-bootstrap";


function Hero() {
  useEffect(() => {
    console.log("Render Hero")
  }, [])
  return (
    <div className="">
      {text.map((item, index) => {
        return (
          <section className="bg-hero hero-container ">
            <Row className="p-0 m-0">
              <Col className="col-8 d-flex justify-content-end p-5"> <h1 className=" m-0 hero-title w-100">{item.title}</h1></Col>
              <Col className="col-4 d-flex justify-content-end p-5">
                <img src={item.iphoneMockup} width={350} height={690}></img>
              </Col>
            </Row>
          </section>
        );
      })}
    </div>
  )
}


export default Hero;