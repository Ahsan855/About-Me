import React from "react";
import About from "../About/About";
import Fetures from "../Fetures/Fetures";
import Services from "../Service/Services";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <About />
      <Fetures />
    </div>
  );
};

export default Home;
