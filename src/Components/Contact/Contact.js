import React from "react";
import image1 from "../../image/undraw_contact_us_re_4qqt.svg";
import { RiContactsFill } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { HiDocumentReport } from "react-icons/hi";
import { BsUiChecks } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 justify-center items-center p-10">
      <div className="text-left">
        <h1 className="text-primary text-xl">
          <span className=" border-2 p-2 rounded-md">Conact us</span>
        </h1>
        <h2 className="text-5xl text-secondary mt-5">
          We Love To Help Great <br /> Companies To Enlarge Their <br />{" "}
          Revenues.
        </h2>
        <form className="mt-10">
          <div className="flex mt-5">
            <div className="relative w-2/5 mr-3">
              <input
                type="text"
                placeholder="First Name"
                className="input input-bordered w-full pl-16 rounded-full shadow-lg"
              />
              <button className="absolute top-3 left-5 border-r-4 border-primary text-primary text-2xl rounded-full">
                <RiContactsFill />
              </button>
            </div>
            <div className="relative w-2/5">
              <input
                type="text"
                placeholder="Last Name"
                className="input input-bordered w-full pl-16 rounded-full  shadow-lg"
              />
              <button className="absolute top-3 left-5 border-r-4 border-primary text-primary text-2xl rounded-full">
                <RiContactsFill />
              </button>
            </div>
          </div>

          <div className="flex mt-5">
            <div className="relative w-2/5 mr-3">
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered w-full pl-16 rounded-full  shadow-lg"
              />
              <button className="absolute top-3 left-5 border-r-4 border-primary text-primary text-2xl rounded-full">
                <MdOutlineMailOutline />
              </button>
            </div>
            <div className="relative w-2/5">
              <input
                type="text"
                placeholder="Phone"
                className="input input-bordered w-full pl-16 rounded-full  shadow-lg"
              />
              <button className="absolute top-3 left-5 border-r-4 border-primary text-primary text-2xl rounded-full">
                <FiPhone />
              </button>
            </div>
          </div>

          <div className="flex mt-5">
            <div className="relative w-2/5 mr-3">
              <input
                type="text"
                placeholder="Project Title"
                className="input input-bordered w-full pl-16 rounded-full  shadow-lg"
              />
              <button className="absolute top-3 left-5 border-r-4 border-primary text-primary text-2xl rounded-full">
                <HiDocumentReport />
              </button>
            </div>
            <div className="relative w-2/5">
              <select className="select select-bordered w-full text-secondary max-w-xs pl-16 rounded-full  shadow-lg">
                <option disabled selected>
                  Choose Service
                </option>
                <option>Web Devlopment</option>
                <option>Web Design</option>
                <option>App Devlopment</option>
              </select>
              <button className="absolute top-3 left-5 border-r-4 border-primary text-primary text-2xl rounded-full">
                <BsUiChecks />
              </button>
            </div>
          </div>
          <div className="relative w-3/4 mt-5">
            <textarea
              className="textarea h-3/6 pt-5 input input-bordered w-full pl-16 rounded-full  shadow-lg"
              placeholder="Message"
            ></textarea>
            <button className="absolute top-6 left-5 border-r-4 border-primary text-primary text-2xl rounded-full shadow-lg">
              <AiOutlineMessage />
            </button>
          </div>
        </form>
        <button className="btn btn-primary px-10 mt-5 rounded-full text-white">
          Subscribe Now
        </button>
      </div>
      <div>
        <img src={image1} alt="" />
      </div>
    </div>
  );
};

export default Contact;
