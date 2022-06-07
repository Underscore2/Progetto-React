import React from "react";
import { useEffect } from "react";
import texts from "../utilities/texts.json";
import "../css/helper-class.css";
import { Col, Space, Row } from "antd";
import "antd/dist/antd.css";
import logo from "../images/egg-fill.svg";

class Footer extends React.Component{
 
  render(){
  
  return (
    <div>
      {texts.map((item) => {
        return (
          <Row
            wrap="true"
            align="middle"
            className="white-modules p-3 d-flex align-center"
          >
            <Col xs={{ span: 24, order: 2 }} lg={{ span: 13, offset: 6 }} className="py-3">
              <ul className="list-style p-0 m-0  justify-start ">
                <Space align="center" className="w-100 d-flex justify-lg-end">
                  <li>
                    <a hreft="#" className="link font-secondary">
                      {item.footer.footerLink1}
                    </a>
                  </li>
                  <li>
                    <a hreft="#" className="link font-secondary">
                      {item.footer.footerLink2}
                    </a>
                  </li>
                  <li>
                    <a hreft="#" className="link font-secondary">
                      {item.footer.footerLink3}
                    </a>
                  </li>
                </Space>
              </ul>
            </Col>
            <Col xs={{ span: 24, order: 1 }} lg={{ span: 5 }} className="py-2">
              <a className="d-flex align-center">
                  <img
                    src={logo}
                    alt="logo"
                    style={{ width: "50px", height: "auto" }}
                  ></img>
                <p className="font-secondary link m-0 f1">{item.footer.subtitle}</p>
              </a>
            </Col>
            <Col
              xs={{ span: 24, order: 3 }}
              className="py-3 font-secondary"
              align="start"
            >
              {item.footer.description}
            </Col>
          </Row>
        );
      })}
    </div>
  );
}}

export default Footer;
