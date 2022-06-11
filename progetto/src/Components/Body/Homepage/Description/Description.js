import React from "react";
import { Col, Row } from "react-bootstrap";
import text from "../../../../utilities/texts.json";

export default function Description() {
  return text.map((item) => {
    return (
      <section className="container-xxl px-4">
        {item.schema.map((desc, index) => {
          return (
            <Row key={index+'row'} data-aos="fade-up"
            data-aos-duration="1500" className="white-modules  p-2 my-5">
              <Col key={index+'col'} xs={12} md={8} className={index % 2 ? "d-flex flex-column order-0 py-2 justify-content-center":"order-1 d-flex py-2 justify-content-center flex-column"}>
           
                <h1 className="font-primary mb-4 link">{desc.title} </h1>
                <h6 className="font-secondary lh-base">{desc.subtitle} </h6>
               
              </Col>
              <Col key={index+'col2'} xs={12} md={4} className={index % 2 ? "order-1 d-flex justify-content-center py-2 align-items-center mt-4 m-lg-0":"order-0 d-flex py-2 justify-content-center align-items-center mt-4 m-lg-0"}>
                <img src={desc.image} alt="" className="desc-img"/>
              </Col>
            </Row>
          );
        })}
      </section>
    );
  });
}
