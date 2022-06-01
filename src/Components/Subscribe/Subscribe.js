import React from "react";
import img1 from "../../image/undraw_javascript_frameworks_-8-qpc.svg";

const Subscribe = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-20 bg-primary p-10">
      <div className="my-16">
        <img className="max-w-lg" src={img1} alt="" />
      </div>
      <div className="my-28 text-left">
        <h1 className="text-white text-xl">
          <span className=" border-2 p-2 rounded-md"> Services</span>
        </h1>
        <h1 className="text-4xl text-white mt-7">
          Subscribe To Our Newsletter For Latest <br /> Update Of Finanical
          Services
        </h1>
        <p className="text-white my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
          tempore quia ratione quod at magnam iusto voluptatum harum dolores
          dolorum. tempore quia ratione quod at magnam iusto voluptatum harum
          dolores dolorum.
        </p>
        <div className="form-control w-10/12 p-2 bg-white rounded-full mt-10">
          <div className="relative">
            <input
              type="text"
              placeholder="Email Address"
              className=" input w-full rounded-full"
            />
            <button className="btn btn-primary px-20 absolute top-0 right-0 rounded-full">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
