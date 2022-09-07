import React from "react";
import text from "../../../../utilities/texts.json";

export default function Graphic() {
  return (
    <section className="d-flex flex-column justify-content-center align-items-center container-xxl py-3">
      <h2 className="font-secondary text-center">We beat the market <span className="font-primary fw-bold"> out of 10 years.</span></h2>
      <h3 className="font-secondary text-center mb-5">Average yearly return of <span className="font-primary fw-bold">35.4%.</span></h3>
      <img className="w-100 graph mt-5" src={text.map(item=>item.grafico)} alt=""></img>
    </section>
  );
}
