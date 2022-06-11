import React from "react";
import text from "../../../../utilities/texts.json";
import { Row, Col, Form, Button } from "react-bootstrap";


class Hero extends React.Component{
  render(){
    return (
      <div>
        {text.map((item) => {
          return (
            <section className="container-xxl py-3">
              <Row className="w-100 m-0 py-3 justify-content-center align-items-center px-4 m-0 w-100">
                <Col xs={12} lg={6} className="order-1 py-2 my-3 order-lg-0">
                  <h1 className="fw-bold py-2 m-0 f-title font-primary">
                    {item.title}
                  </h1>
                  <h6 className="fw-bold m-0 font-primary">{item.subtitle}</h6>
                  <Form>
                    <Form.Group
                      className="mt-5 mb-3"
                      controlId="formBasicEmail"
                    >
                      <Form.Label>
                        {" "}
                        <h5 className="fw-bold font-secondary">
                          {item.preform}
                        </h5>
                      </Form.Label>
                      <div className=" d-flex justify-content-between align-items-center ">
                        <Form.Control
                          type="email"
                          className="w-100 me-2 me-lg-4"
                          placeholder="Enter email"
                        />
                        <Button type="submit" className="w-75 bg-orange submit">
                          <span className="fw-bold">Get started</span>
                        </Button>
                      </div>
                    </Form.Group>
                  </Form>
                </Col>
                <Col
                  xs={12}
                  lg={{ span: 5, offset: 1 }}
                  className="order-0 py-2 my-3 d-flex justify-content-center align-items-center order-lg-1"
                >
                  <img className="hero" src={item.headerImg} alt=""></img>
                </Col>
              </Row>
            </section>
          );
        })}
      </div>
    )
  }
}

export default Hero;