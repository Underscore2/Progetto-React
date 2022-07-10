import React, { useEffect } from "react";
import Hero from "./Hero/Hero.js";
import Graphic from "./Graphic/Graphic.js";
import List from "./List//List";
import Description from "./Description/Description.js";
import Cards from "./Cards/Cards.js";


export default function Homepage() {
  useEffect(()=>{
    console.log("Render Homepage")
  },[])
  return (
    <div className="p-0">
        <Hero />
       
      
    </div>
  )
}