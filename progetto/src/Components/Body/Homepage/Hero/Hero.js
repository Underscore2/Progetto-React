import React, { useEffect } from "react";
import text from "../../../../utilities/texts.json";
import { Row, Col, Form, Button } from "react-bootstrap";


function Hero() {
  useEffect(() => {
    console.log("Render Hero")
  }, [])
  return (
    <div>
      {text.map((item, index) => {
        return (
          <section key={index + 'section'} className="container-xxl py-3">
            <Row key={index + 'row'} className="w-100 m-0 py-3 justify-content-center align-items-center px-4 m-0 w-100">
              <Col key={index + 'col'} xs={12} lg={6} className="order-1 py-2 my-3 order-lg-0">
                <h1 key={index + 'h1'} className="fw-bold py-2 m-0 f-title font-primary">
                  {item.title}
                </h1>
                <h6 key={index + 'h6'} className="fw-bold m-0 font-primary">{item.subtitle}</h6>
                <Form key={index + 'form'}>
                  <Form.Group key={index + 'groupform'}
                    className="mt-5 mb-3"
                    controlId="formBasicEmail"
                  >
                    <Form.Label key={index + 'labelform'}>
                      {" "}
                      <h5 key={index + 'h5'} className="fw-bold font-secondary">
                        {item.preform}
                      </h5>
                    </Form.Label>
                    <div key={index + 'div'} className=" d-flex justify-content-between align-items-center ">
                      <Form.Control key={index}
                        type="email"
                        className="w-100 me-2 me-lg-4"
                        placeholder="Enter email"
                      />
                      <Button key={index + 'button'} type="submit" className="w-75 bg-orange submit">
                        <span key={index + 'span'} className="fw-bold">Get started</span>
                      </Button>
                    </div>
                  </Form.Group>
                </Form>
              </Col>
              <Col key={index + 'col2'}
                xs={12}
                lg={{ span: 5, offset: 1 }}
                className="order-0 py-2 my-3 d-flex justify-content-center align-items-center order-lg-1"
              >
                <img
                  width="450"
                  height="289"
                  src={item.headerImg}
                  srcset={`${item.headerImgXS} 450w`}
                  alt="Puppy with balloons"
                />
              </Col>
            </Row>
          </section>
        );
      })}
    </div>
  )
}


export default Hero;