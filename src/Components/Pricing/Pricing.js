import React from "react";

const Pricing = () => {
  return (
    <div className="mt-20 mb-16">
      <div>
        <h1 className="text-xl uppercase text-secondary text-center">
          pricing
        </h1>
        <h1 className="text-4xl mt-3 uppercase text-secondary font-bold text-center">
          choose plan
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 mx-20">
          <div className="text-center shadow-primary text-primary shadow-md rounded-lg p-4">
            <h1 className="text-secondary text-4xl my-5">Basic Plan</h1>
            <h1 className="text-3xl text-primary">
              <span className="font-bold">$99</span>/Month
            </h1>
            <p className="text-secondary mb-4">
              Aliquam dui lacus, <br /> lobortis quis sapien non.
            </p>
            <ul className="text-primary">
              <li className="pb-2  hover:text-secondary">Graphic Design</li>
              <li className="pb-2 hover:text-secondary">Web Design</li>
              <li className="pb-2 hover:text-secondary">UI/UX</li>
              <li className="pb-2 hover:text-secondary">HTML/CSS</li>
              <li className="pb-2 hover:text-secondary">SEO Marketing</li>
              <li className="pb-2 hover:text-secondary">Business Analysis</li>
            </ul>
            <button className="py-3 px-6 bg-primary text-xl mt-5 text-white rounded-full hover:bg-secondary duration-300">
              Start Now
            </button>
          </div>
          <div className="text-center shadow-primary text-primary shadow-md rounded-lg p-4">
            <h1 className="text-secondary text-4xl my-5">Standert Plan</h1>
            <h1 className="text-3xl text-primary">
              <span className="font-bold">$199</span>/Month
            </h1>
            <p className="text-secondary mb-4">
              Aliquam dui lacus, <br /> lobortis quis sapien non.
            </p>
            <ul className="text-primary">
              <li className="pb-2  hover:text-secondary">Graphic Design</li>
              <li className="pb-2 hover:text-secondary">Web Design</li>
              <li className="pb-2 hover:text-secondary">UI/UX</li>
              <li className="pb-2 hover:text-secondary">HTML/CSS</li>
              <li className="pb-2 hover:text-secondary">SEO Marketing</li>
              <li className="pb-2 hover:text-secondary">Business Analysis</li>
            </ul>
            <button className="py-3 px-6 bg-primary text-xl mt-5 text-white rounded-full hover:bg-secondary duration-300">
              Start Now
            </button>
          </div>

          <div className="text-center shadow-primary text-primary shadow-md rounded-lg p-4">
            <h1 className="text-secondary text-4xl my-5">Premium Plan</h1>
            <h1 className="text-3xl text-primary">
              <span className="font-bold">$299</span>/Month
            </h1>
            <p className="text-secondary mb-4">
              Aliquam dui lacus, <br /> lobortis quis sapien non.
            </p>
            <ul className="text-primary">
              <li className="pb-2  hover:text-secondary">Graphic Design</li>
              <li className="pb-2 hover:text-secondary">Web Design</li>
              <li className="pb-2 hover:text-secondary">UI/UX</li>
              <li className="pb-2 hover:text-secondary">HTML/CSS</li>
              <li className="pb-2 hover:text-secondary">SEO Marketing</li>
              <li className="pb-2 hover:text-secondary">Business Analysis</li>
            </ul>
            <button className="py-3 px-6 bg-primary text-xl mt-5 text-white rounded-full hover:bg-secondary duration-300">
              Start Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
