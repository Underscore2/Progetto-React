import React from "react";
import {Col, Row} from "react-bootstrap";
import text from "../utilities/texts.json";


export default function List() {
    return(
        text.map((item) =>{
            return(
                    <section className="container-sm py-3">
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
                    </section>
            )
        })

    )
}