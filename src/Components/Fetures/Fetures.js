import React from "react";
import image1 from "../../image/undraw_lightbulb_moment_re_ulyo.svg";
import image2 from "../../image/undraw_conversation_re_c26v.svg";
import image3 from "../../image/undraw_innovative_re_rr5i.svg";

const Fetures = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 justify-around items-center mt-20 p-5 mb-20">
      <div>
        <h1 className="text-primary text-xl mb-8 ml-36 text-left">
          <span className=" border-2 p-2 rounded-md">Fetures</span>
        </h1>
        <h1 className="text-secondary text-4xl text-left ml-36">
          Our Working Process To Help <br /> Your Boost Your Business
        </h1>
        <div>
          {/* div 1 */}

          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-10">
              <div className="ml-36">
                <img
                  src={image1}
                  className="w-3/5 my-auto bg-secondary-200 border-2 border-primary rounded-full"
                  alt=""
                />
              </div>
              <div className="text-left ml-[-48px]">
                <h1 className="text-2xl text-secondary font-bold">
                  Idea & Analysis Gathering
                </h1>
                <p className="text-accent mt-2">
                  Idea & Analysis Gathering Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-10">
              <div className="ml-36">
                <img
                  src={image2}
                  className="w-3/5 my-auto bg-secondary-200 border-2 border-primary rounded-full"
                  alt=""
                />
              </div>
              <div className="text-left ml-[-48px]">
                <h1 className="text-2xl text-secondary font-bold">
                  Designing & Developing
                </h1>
                <p className="text-accent mt-2">
                  Idea & Analysis Gathering Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-10">
              <div className="ml-36">
                <img
                  src={image3}
                  className="w-3/5 my-auto bg-secondary-200 border-2 border-primary rounded-full"
                  alt=""
                />
              </div>
              <div className="text-left ml-[-48px]">
                <h1 className="text-2xl text-secondary font-bold">
                  Testing & Lunching
                </h1>
                <p className="text-accent mt-2">
                  Idea & Analysis Gathering Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          src="https://samartheme1.vercel.app/images/about/img5.png"
          alt=""
          className="w-3/4 mx-auto"
        />
      </div>
    </div>
  );
};

export default Fetures;
