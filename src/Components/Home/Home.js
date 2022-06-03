import React from "react";
import About from "../About/About";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import Fetures from "../Fetures/Fetures";
import Pricing from "../Pricing/Pricing";
import Services from "../Service/Services";
import Subscribe from "../Subscribe/Subscribe";
import Team from "../Team/Team";
import Testmonial from "../Testmonial/Testmonial";
import Banner from "./Banner/Banner";
import ViewSection from "./ViewSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <Team />
      <Services />
      <Testmonial />
      <About />
      <Fetures />
      <Subscribe />
      <Pricing />
      <Blog />
      <ViewSection />
      <Contact />
    </div>
  );
};

export default Home;
