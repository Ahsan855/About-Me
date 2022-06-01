import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Fetures from "../Fetures/Fetures";
import Pricing from "../Pricing/Pricing";
import Services from "../Service/Services";
import Subscribe from "../Subscribe/Subscribe";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <About />
      <Fetures />
      <Subscribe />
      <Pricing />
      <Contact />
    </div>
  );
};

export default Home;
