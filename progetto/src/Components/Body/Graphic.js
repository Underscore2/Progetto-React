import React from "react";
import text from "../../utilities/texts.json";
import ListsImg from "../../images/grafico.png";

export default function Graphic() {

        return (
            text.map((item) => {
                return(
                    <section className="d-flex flex-column justify-content-center align-items-center mt-5 container-sm py-3">
                        <h1 className="font-primary">{item.list1.title}</h1>
                        <h2 className="font-primary">{item.list1.subtitle}</h2>
                        <img className="w-100" src={ListsImg} alt=""></img>
                    </section>
                )
            })
        )
    }
