import React from "react";
import image2 from "../../image/undraw_web_development_0l6v.svg";
import image3 from "../../image/undraw_instant_information_re_c5v5.svg";
import image4 from "../../image/undraw_web_development_0l6v.svg";

const Services = () => {
  return (
    <div className="my-20">
      <h1 className="text-primary text-xl">
        <span className=" border-2 p-2 rounded-md"> Services</span>
      </h1>
      <h2 className="text-secondary text-4xl text-center my-10">
        Provide Awesome Service To You
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 px-10 gap-4 mt-5 items-center justify-center">
        <div className="text-center shadow-sm rounded-lg shadow-primary p-10">
          <img src={image2} alt="" className="w-3/6 mx-auto mb-7" />
          <h1 className="text-secondary mb-4 text-3xl">Full-Stack Devloper</h1>
          <p className="text-accent">
            Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien
            euismod, faucibus nibh non, consequat elit. Praesent sed vehicula.
          </p>
        </div>
        <div className="text-center shadow-sm rounded-lg shadow-primary p-10">
          <img src={image3} alt="" className="w-3/6 mx-auto mb-7" />
          <h1 className="text-secondary mb-4 text-3xl">Web Devlopment</h1>
          <p className="text-accent">
            Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien
            euismod, faucibus nibh non, consequat elit. Praesent sed vehicula.
          </p>
        </div>
        <div className="text-center shadow-sm rounded-lg shadow-primary p-10">
          <img src={image4} alt="" className="w-3/6 mx-auto mb-7" />
          <h1 className="text-secondary mb-4 text-3xl">Web Solution</h1>
          <p className="text-accent">
            Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien
            euismod, faucibus nibh non, consequat elit. Praesent sed vehicula.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
