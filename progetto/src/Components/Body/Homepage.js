import React from "react";
import Hero from "./Hero.js";
import Graphic from "./Graphic";
import List from "./List";
import Description from "./Description";
import Cards from "./Cards";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";

export default function Homepage() {
  return (
    <>
        {/*<Navbar/>*/}
        <Hero />
        <Description/>
        <Graphic/>
        <List/>
        <Cards/>
        {/*<Footer/>*/}
    </>
  )
}