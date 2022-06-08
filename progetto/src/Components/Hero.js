import React from "react";
import text from "../utilities/texts.json";
import { Row, Col, Form, Button, Container } from "react-bootstrap";
import imgHero from "../images/hero.png";
import ListsImg from "../images/grafico.png";

class Hero extends React.Component {
  render() {
    return (
      <div>
        {text.map((item) => {
          return (
            <div className="container-sm py-3">
              <Row className=" white-modules w-100 m-0 py-3 justify-content-center align-items-center px-4 m-0 w-100">
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
                  <img className="hero p-4 me-lg-5" src={imgHero} alt=""></img>
                </Col>
              </Row>
              <div className="d-flex flex-column justify-content-center align-items-center mt-5">
                <h1 className="font-primary">{item.list1.title}</h1>
                <h2 className="font-primary">{item.list1.subtitle}</h2>
                <img className="w-100" src={ListsImg} alt=""></img>
              </div>
              <div>
                <Row>
                  <Col lg={6}>
                    <ul>
                      <li className="font-primary mt-5 h3 color-orange">
                        {item.list1.l1}
                      </li>
                      <li className="font-primary mt-4 h3 font-secondary">
                        {item.list1.l2}
                      </li>
                      <li className="font-primary mt-4 h3">{item.list1.l3}</li>
                      <li className="font-primary mt-4 h3 color-orange">
                        {item.list1.l4}
                      </li>
                      <li className="font-primary mt-4 h3 font-secondary">
                        {item.list1.l5}
                      </li>
                      <li className="font-primary mt-4 h3">{item.list1.l6}</li>
                      <li className="font-primary mt-4 h3 color-orange">
                        {item.list1.l7}
                      </li>
                      <li className="font-primary mt-4 h3 font-secondary">
                        {item.list1.l8}
                      </li>
                    </ul>
                  </Col>
                  <Col xs={12} lg={6}>
                    <div className="d-flex flex-column mt-5">
                      <h1 className="font-primary font-secondary">
                        {item.list1.rightList}
                      </h1>
                      <h1 className="font-primary fw-bold ">
                        {item.list1.rightList2}
                      </h1>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Hero;
