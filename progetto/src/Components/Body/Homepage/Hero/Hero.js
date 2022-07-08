import React, { useEffect } from "react";
import text from "../../../../utilities/texts.json";
import { Row, Col, Form, Button } from "react-bootstrap";


function Hero() {
  useEffect(() => {
    console.log("Render Hero")
  }, [])
  return (
    <div className=" ">
      {text.map((item, index) => {
        return (
          <section className="bg-hero hero-container ">
            <Row className="p-0 m-0">
              <Col className="col-12 d-flex justify-content-end"> <h1 className=" m-0 hero-title w-75">{item.title}</h1></Col>
              <Col className="col-12 d-flex justify-content-end pb-5">
                <img src={item.iphoneMockup} width={340} height={666}></img>
              </Col>
            </Row>
          </section>
        );
      })}
    </div>
  )
}


export default Hero;