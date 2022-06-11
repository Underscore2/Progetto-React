import React from "react";
import {Card, Button, Col, Row} from "react-bootstrap";
import text from "../../../../utilities/texts.json";

export default function Cards() {
    return(
        text.map((item) =>{
            return(
                <section className="container-xxl py-3">
                    <Row>
                        <Col lg={6} className="py-3 d-flex justify-content-center">
                    <Card className="white-modules font-primary border-orange w-75">
                        <Card.Body className="py-3 d-flex flex-column justify-content-center align-items-center w-100 m-0">
                            <Card.Title className="py-1 text-center font-priamry"><h1> {item.pricingLeft.title}</h1></Card.Title>
                            <Card.Title className="py-3 text-center font-secondary"><h3>{item.pricingLeft.subtitle}</h3></Card.Title>

                            <Card.Text as="div" className="py-3">
                                <ul className="m-0 p-0 list-unstyled">
                                    <li>{item.pricingLeft.l1}</li>
                                    <li>{item.pricingLeft.l2}</li>
                                    <li>{item.pricingLeft.l3}</li>
                                    <li>{item.pricingLeft.l4}</li>
                                    <li>{item.pricingLeft.l5}</li>
                                </ul>
                            </Card.Text>
                            <Button className={"submit font-primary bg-orange"} variant="primary">Subscribe Now</Button>
                        </Card.Body>
                    </Card>
                        </Col>

                        <Col lg={6} className="py-3 d-flex justify-content-center">
                            <Card className="white-modules font-primary border-orange w-75">
                                <Card.Body className="py-3 d-flex flex-column justify-content-center align-items-center w-100 m-0">
                                    <Card.Title className="py-1 text-center font-primary"><h1>{item.pricingRight.title}</h1></Card.Title>
                                    <Card.Title className="py-3 text-center font-secondary"><h3>{item.pricingRight.subtitle}</h3></Card.Title>
                                    <Card.Text as="div" className="py-3">
                                        <ul className="m-0 p-0 list-unstyled">
                                            <li>{item.pricingRight.l1}</li>
                                            <li>{item.pricingRight.l2}</li>
                                            <li>{item.pricingRight.l3}</li>
                                            <li>{item.pricingRight.l4}</li>
                                            <li>{item.pricingRight.l5}</li>
                                        </ul>
                                    </Card.Text>
                                    <Button className={"submit font-primary bg-orange"} variant="primary">Subscribe Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </section>
            )
        })

    )
}
