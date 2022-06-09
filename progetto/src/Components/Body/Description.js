import React from "react";
import {Col, Row} from "react-bootstrap";
import text from "../../utilities/texts.json";


export default function Description() {
    return(
        text.map((item) =>{
            return(
                <section className="container-sm py-3">
            <Row>
                <Col>
                    <h1>{item.schema1.title}</h1>
                    <h6>{item.schema1.description}</h6>
                </Col>
                <Col>
                    <img src={item.schema1.schema1img} alt=""/>
                </Col>
                <Col>
                    <h1>{item.schema2.title}</h1>
                    <h6>{item.schema2.description}</h6>
                </Col>
                <Col>
                    <img src={item.schema2.schema2img} alt=""/>
                </Col>
                <Col>
                    <h1>{item.schema3.title}</h1>
                    <h6>{item.schema3.description}</h6>
                </Col>
                <Col>
                    <img src={item.schema3.schema3img} alt=""/>
                </Col>
                <Col>
                    <h1>{item.schema4.title}</h1>
                    <h6>{item.schema4.description}</h6>
                </Col>
                <Col>
                    <img src={item.schema4.schema4img} alt=""/>
                </Col>
                <Col>
                    <h1>{item.schema5.title}</h1>
                    <h6>{item.schema5.description}</h6>
                </Col>
                <Col>
                    <img src={item.schema5.schema5img} alt=""/>
                </Col>
            </Row>
                </section>
            )
        })

    )
}