import React from "react";
import {Card, Button, Col, Row} from "react-bootstrap";
import text from "../../utilities/texts.json";

export default function Cards() {
    return(
        text.map((item) =>{
            return(
                <section className="container-sm py-3">
                    <Row>
                        <Col lg={6} className="py-3">
                    <Card className="white-modules font-primary text-center border-orange">
                        <Card.Body>
                            <Card.Title className="py-1">{item.pricingLeft.title}</Card.Title>
                            <Card.Title className="py-4"></Card.Title>
                            <Card.Text className={"py-3"}>
                                <ol>
                                    <li>{item.pricingLeft.l1}</li>
                                    <li>{item.pricingLeft.l2}</li>
                                    <li>{item.pricingLeft.l3}</li>
                                    <li>{item.pricingLeft.l4}</li>
                                    <li>{item.pricingLeft.l5}</li>
                                </ol>
                            </Card.Text>
                            <Button className={"font-primary bg-orange"} variant="primary">Subscribe Now</Button>
                        </Card.Body>
                    </Card>
                        </Col>

                        <Col lg={6} className="py-3">
                            <Card className="white-modules font-primary text-center border-orange">
                                <Card.Body>
                                    <Card.Title className="py-1">{item.pricingRight.title}</Card.Title>
                                    <Card.Title className="py-3">{item.pricingRight.subtitle}</Card.Title>
                                    <Card.Text className={"py-3"}>
                                        <ol>
                                            <li>{item.pricingRight.l1}</li>
                                            <li>{item.pricingRight.l2}</li>
                                            <li>{item.pricingRight.l3}</li>
                                            <li>{item.pricingRight.l4}</li>
                                            <li>{item.pricingRight.l5}</li>
                                        </ol>
                                    </Card.Text>
                                    <Button className={"font-primary bg-orange"} variant="primary">Subscribe Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </section>
            )
        })

    )
}
