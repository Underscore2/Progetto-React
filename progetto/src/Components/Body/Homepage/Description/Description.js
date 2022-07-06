import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import text from "../../../../utilities/texts.json";

export default function Description() {
  useEffect(() => {
    console.log("Render descriptiop")
  }, [])
  return text.map((item, index) => {
    return (
      < section key={index + 'section'} className="container-xxl px-4">
        {item.schema.map((desc, index) => {
          return (
            <Row key={index + 'row'}
              className="white-modules  p-2 my-5">
              <Col key={index + 'col'} xs={12} md={8} className={index % 2 ? "d-flex flex-column order-0 py-2 justify-content-center" : "order-1 d-flex py-2 justify-content-center flex-column"}>

                <h1 key={index + 'h1'} className="font-primary mb-4 link">{desc.title} </h1>
                <h6 key={index + 'h6'} className="font-secondary lh-base">{desc.subtitle} </h6>

              </Col>
              <Col key={index + 'col2'} xs={12} md={4} className={index % 2 ? "order-1 d-flex justify-content-center py-2 align-items-center mt-4 m-lg-0" : "order-0 d-flex py-2 justify-content-center align-items-center mt-4 m-lg-0"}>
                <img key={index + 'img'} src={desc.image} width="235" height="117" className="desc-img" />
              </Col>
            </Row>
          );
        })}
      </section>
    );
  });
}
