import { Col } from "react-bootstrap";

export default function Infocard({title,sphere, subtitle, image}){
    return(
        <Col className=" p-5   col-4 d-flex justify-content-center">
          <div className="info-style w-100 d-flex flex-column align-items-center justify-content-center py-2 px-3">
            <h2 className="text-center">{title}</h2>
            <img src={sphere} width={80} height={80} alt="" ></img>
            <p className="text-center">{subtitle}</p>
            <img src={image} width={100} height={100} alt=""></img>
          </div>
        </Col>
    )
}