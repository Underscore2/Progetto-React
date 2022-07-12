import React, { useEffect } from "react";
import texts from "../../utilities/texts.json";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer({color="white"}) {
    useEffect(()=>{
        console.log("Render Footer")
    },[])
    return (
        <div>
            {texts.map((item) => {
                return (
                    <div className=' p-1 container-xxl'>
                        <Row className='m-0 py-3 justify-content-center align-items-center px-2 m-0 w-100'>
                            <Col xs={12} style={{color:color}} className='my-2 fw-bold'>{item.footer.description}</Col>
                        </Row>
                    </div>
                );
            })}
        </div>
    );
}