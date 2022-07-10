import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Infocard from "./InfoCard/Infocard";
import text from "../../../../utilities/texts.json";
import InfocardTS from "../../../../utilities/interfaces"



export default function Description() {
  useEffect(() => {
    console.log("Render description")
  }, [])

 
  return (
    text.map((json:any,key:number):any => {
      return(
        <section className="bg-description" key={key+'section'}>
          <Row key={key+'row'} className="h-100 d-flex justify-content-center w-100">
              {json.schema.map((item:InfocardTS)=>{
                return(<Infocard key={key+'infocard'} title={item.title} sphere={item.sphere} subtitle={item.subtitle} image={item.image}/>
              )})}
          </Row>
        </section>
      )
    })
  )
}
