import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { store } from "../../../states/Store";
import { decrypt, key } from "../../../utilities/encrypt";
import text from "../../../utilities/texts.json"
export default function Dashboard() {
   const user = decrypt(store.getState().users[0].email, key)
   let logged = false;
   useEffect(() => {
      console.log("Render Dashboard")
      console.log()
   }, [])
   store.getState().users.map((user =>
      user.authorized === true
         ? logged = true : logged = false))


   if (logged) {
      return (
         <>
            <div className=" box-dashboard m-2">
               <Row className="p-2">
                  <Col className=" col-4">
                     <h3>{user}</h3>
                     <h2> **** **** **** 8123</h2>
                     <h4> Master Card</h4>
                  </Col>
                  <Col className="  col-4">
                     <h3>Balance</h3>
                     <h1 style={{ color: "green" }}>
                        {Math.floor(Math.random() * 18000)}$
                     </h1>
                     <h4>Previous month: {Math.floor(Math.random() * 8000)}$ </h4>
                  </Col>
                  <Col className=" col-4 d-flex flex-column justify-content-evenly align-items-start">
                     <h5 > Cash: <span style={{ color: "green" }}>
                        {Math.floor(Math.random() * 6000)}</span> USD </h5>
                     <h5> Average: <span style={{ color: "green" }}>
                        {Math.floor(Math.random() * 8000)}
                     </span> USD
                     </h5>
                     <h5>Investment: <span style={{color:"red"}}> -{Math.floor(Math.random() * 8000)}</span> USD</h5>
                  </Col>
               </Row>
               
               
            </div>
            <div className="m-2 w-50">
               <Row className=" col-6 d-flex justify-content-center align-items-center ">
                  <Col ><div className="box-dashboard w-100"> CIAO<img width="auto" height={250} src={text.map(item=>item.grafico)}></img></div></Col>
               </Row>
               </div>
         </>
      )
   }
   else return (
      <Navigate to='/Giangischi' replace />
   )


}