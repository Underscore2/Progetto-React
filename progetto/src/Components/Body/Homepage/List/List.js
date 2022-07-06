import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import text from "../../../../utilities/texts.json";

export default function List() {
  useEffect(()=>{
    console.log("Render List")
  },[])
  return text.map((item) => {
    return (
      <section className="container-xxl py-3 ">
        <Row>
          <Col xs={12} md={6} className="order-1 mt-5 order-md-0 mt-md-0 d-flex justify-content-center align-items-center">
            <ul className="p-0 m-0">
              {item.list.map((point, index) => {
                return (
                  <>
                    <li
                      key={index}
                      className={index % 2 ? "mt-3 font-secondary h4" : index % 3 ? "font-primary mt-3 h4" : "color-orange mt-3 h4"}
                    >
                      {point.li}
                    </li>
                  </>
                );
              })}
            </ul>
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center order-0 order-md-1">
            <div className="d-flex flex-column mt-5 w-75">
              <h3 className="font-secondary">
                {item.texts.text1}
              </h3>
              <h3 className="font-primary fw-bold">{item.texts.text2}</h3>
            </div>
          </Col>
        </Row>
      </section>
    );
  });
}
