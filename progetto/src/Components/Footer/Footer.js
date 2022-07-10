import React, { useEffect } from "react";
import texts from "../../utilities/texts.json";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer() {
    useEffect(()=>{
        console.log("Render Footer")
    },[])
    return (
        <div>
            {texts.map((item) => {
                return (
                    <div className=' p-1 container-xxl'>
                        <Row className='m-0 py-3 white-modules justify-content-center align-items-center px-2 m-0 w-100'>
                            <Col xs={12} md={4} lg={6} xl={6} xxl={8} className="py-2">
                                <Link to="/" className="d-flex align-items-center">
                                    <img
                                        src={item.navbarLogo}
                                        alt="logo"
                                        style={{ width: "50px", height: "50px" }}
                                    ></img>
                                    <p className="font-secondary link m-0 f1 mt-2">
                                        {item.footer.subtitle}
                                    </p>
                                </Link>
                            </Col>
                            <Col xs={12} md={8} lg={6} xl={6} xxl={4} className='my-3'>
                                <Row className="d-flex w-100 p-0 m-0">
                                    {item.footer.footerLinks.map((element, index) => {
                                        return (
                                            <Col key={index} xs={12} sm={4} className="d-flex justify-content-start justify-content-sm-center justify-content-lg-end align-items-center p-0">
                                                <Link key={index + "link"} to="/" hreft="#" className=" my-1 mx-1 link footerlink font-secondary">
                                                    {element}
                                                </Link>
                                            </Col >
                                        )
                                    })
                                    }
                                </Row>
                            </Col>
                            <Col xs={12} className='font-secondary my-2'>{item.footer.description}</Col>
                        </Row>
                    </div>
                );
            })}
        </div>
    );
}