import React from "react";
import image1 from "../../image/undraw_team_spirit_re_yl1v.svg";

const About = () => {
  return (
    <div className="mt-20">
      <div className="hero min-h-screen p-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <img src={image1} className="max-w-lg rounded-lg shadow-2xl" alt="" />
          <div className="text-left">
            <h1 className="text-primary text-xl">
              <span className=" border-2 p-2 rounded-md">About Us</span>
            </h1>
            <h1 className="text-4xl text-secondary mb-5 mt-6 font-bold">
              How We Can Help You Achieve <br /> Your Business Goal
            </h1>
            <p className="py-6 text-accent">
              Integer pretium molestie nisl, non blandit lectus suscipit in.
              Vivamus tellus diam, iaculis eget nulla sit amet, tincidunt
              consectetur sem. Suspendisse laoreet, quam sed faucibus feugiat,
              tortor velit suscipit orci, sed consectetur ante eros id urna.
              Mauris luctus nulla ut pharetra tempor. <br className="mb-2" />{" "}
              Mauris egestas eleifend sapien eu malesuada. Phasellus at metus
              eget sapien tristique accumsan non sit amet augue.
            </p>
            <h1 className="text-secondary text-2xl">CEO Jhone Doe</h1>
            <button className="py-3 px-6 bg-primary text-xl mt-5 text-white rounded-full hover:bg-secondary duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
