import React from "react";
import About from "../About/About";
import Services from "../Service/Services";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <About />
    </div>
  );
};

export default Home;
