import React from "react";
import image1 from "../../../image/undraw_laravel_and_vue_-59-tp.svg";

const Banner = () => {
  return (
    <div>
      <div class="hero min-h-screen bg-base-200 p-16">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={image1} className="max-w-xl" alt="" />
          <div className="text-left">
            <h4 className="text-primary text-xl mb-3">WE CREATE IDEAS</h4>
            <h3 className="text-secondary text-5xl font-bold">
              Build Stunning <span className="text-primary">Website</span>{" "}
              <br /> With Slack Agency
            </h3>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class="py-3 px-6 bg-primary text-xl mt-2 text-white rounded-full hover:bg-secondary duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
