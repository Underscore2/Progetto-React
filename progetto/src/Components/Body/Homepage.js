import React from "react";
import Hero from "./Hero.js";
import Graphic from "./Graphic";
import List from "./List";
import Description from "./Description";
import Cards from "./Cards";

export default function Homepage() {
  return (
    <>
        <Hero />
        <Description/>
        <Graphic/>
        <List/>
        <Cards/>
    </>
  )
}