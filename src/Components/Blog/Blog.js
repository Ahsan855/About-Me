import React, { useRef, useState } from "react";

import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./blog.css";
import { BiTimeFive } from "react-icons/bi";
import { FaComment } from "react-icons/fa";
import { BsShareFill } from "react-icons/bs";

const Blog = () => {
  return (
    <div className="my-28">
      <h1 className="text-primary text-xl">
        <span className=" border-2 p-2 rounded-md">Blog</span>
      </h1>
      <h1 className="text-secondary text-4xl text-center my-10">
        Latest Blog & News
      </h1>

      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="mb-10">
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://api.lorem.space/image/shoes?w=400&h=225"
                  alt="Shoes"
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title text-secondary">
                  Praesent ut lobortis purus hasellus libero orci, accumsan.
                </h2>
                <p className="text-accent">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, veritatis temporibus. Quidem commodi accusamus iusto
                  repellendus non autem aliquam quibusdam.
                </p>
                <div class="card-actions justify-around mt-10">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="flex items-center text-xl">
                      <BiTimeFive className="text-primary mr-2" /> 7 March, 2022
                    </div>
                    <div className="flex justify-center items-center text-xl">
                      <FaComment className="text-primary mr-1" />
                      10
                      <BsShareFill className="text-primary ml-5 font-bold" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://api.lorem.space/image/shoes?w=400&h=225"
                  alt="Shoes"
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title text-secondary">
                  Praesent ut lobortis purus hasellus libero orci, accumsan.
                </h2>
                <p className="text-accent">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, veritatis temporibus. Quidem commodi accusamus iusto
                  repellendus non autem aliquam quibusdam.
                </p>
                <div class="card-actions justify-around mt-10">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="flex items-center text-xl">
                      <BiTimeFive className="text-primary mr-2" /> 7 March, 2022
                    </div>
                    <div className="flex justify-center items-center text-xl">
                      <FaComment className="text-primary mr-1" />
                      10
                      <BsShareFill className="text-primary ml-5 font-bold" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://api.lorem.space/image/shoes?w=400&h=225"
                  alt="Shoes"
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title text-secondary">
                  Praesent ut lobortis purus hasellus libero orci, accumsan.
                </h2>
                <p className="text-accent">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, veritatis temporibus. Quidem commodi accusamus iusto
                  repellendus non autem aliquam quibusdam.
                </p>
                <div class="card-actions justify-around mt-10">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="flex items-center text-xl">
                      <BiTimeFive className="text-primary mr-2" /> 7 March, 2022
                    </div>
                    <div className="flex justify-center items-center text-xl">
                      <FaComment className="text-primary mr-1" />
                      10
                      <BsShareFill className="text-primary ml-5 font-bold" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://api.lorem.space/image/shoes?w=400&h=225"
                  alt="Shoes"
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title text-secondary">
                  Praesent ut lobortis purus hasellus libero orci, accumsan.
                </h2>
                <p className="text-accent">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, veritatis temporibus. Quidem commodi accusamus iusto
                  repellendus non autem aliquam quibusdam.
                </p>
                <div class="card-actions justify-around mt-10">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="flex items-center text-xl">
                      <BiTimeFive className="text-primary mr-2" /> 7 March, 2022
                    </div>
                    <div className="flex justify-center items-center text-xl">
                      <FaComment className="text-primary mr-1" />
                      10
                      <BsShareFill className="text-primary ml-5 font-bold" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://api.lorem.space/image/shoes?w=400&h=225"
                  alt="Shoes"
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title text-secondary">
                  Praesent ut lobortis purus hasellus libero orci, accumsan.
                </h2>
                <p className="text-accent">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, veritatis temporibus. Quidem commodi accusamus iusto
                  repellendus non autem aliquam quibusdam.
                </p>
                <div class="card-actions justify-around mt-10">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="flex items-center text-xl">
                      <BiTimeFive className="text-primary mr-2" /> 7 March, 2022
                    </div>
                    <div className="flex justify-center items-center text-xl">
                      <FaComment className="text-primary mr-1" />
                      10
                      <BsShareFill className="text-primary ml-5 font-bold" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://api.lorem.space/image/shoes?w=400&h=225"
                  alt="Shoes"
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title text-secondary">
                  Praesent ut lobortis purus hasellus libero orci, accumsan.
                </h2>
                <p className="text-accent">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, veritatis temporibus. Quidem commodi accusamus iusto
                  repellendus non autem aliquam quibusdam.
                </p>
                <div class="card-actions justify-around mt-10">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="flex items-center text-xl">
                      <BiTimeFive className="text-primary mr-2" /> 7 March, 2022
                    </div>
                    <div className="flex justify-center items-center text-xl">
                      <FaComment className="text-primary mr-1" />
                      10
                      <BsShareFill className="text-primary ml-5 font-bold" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://api.lorem.space/image/shoes?w=400&h=225"
                  alt="Shoes"
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title text-secondary">
                  Praesent ut lobortis purus hasellus libero orci, accumsan.
                </h2>
                <p className="text-accent">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, veritatis temporibus. Quidem commodi accusamus iusto
                  repellendus non autem aliquam quibusdam.
                </p>
                <div class="card-actions justify-around mt-10">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="flex items-center text-xl">
                      <BiTimeFive className="text-primary mr-2" /> 7 March, 2022
                    </div>
                    <div className="flex justify-center items-center text-xl">
                      <FaComment className="text-primary mr-1" />
                      10
                      <BsShareFill className="text-primary ml-5 font-bold" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://api.lorem.space/image/shoes?w=400&h=225"
                  alt="Shoes"
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title text-secondary">
                  Praesent ut lobortis purus hasellus libero orci, accumsan.
                </h2>
                <p className="text-accent">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, veritatis temporibus. Quidem commodi accusamus iusto
                  repellendus non autem aliquam quibusdam.
                </p>
                <div class="card-actions justify-around mt-10">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="flex items-center text-xl">
                      <BiTimeFive className="text-primary mr-2" /> 7 March, 2022
                    </div>
                    <div className="flex justify-center items-center text-xl">
                      <FaComment className="text-primary mr-1" />
                      10
                      <BsShareFill className="text-primary ml-5 font-bold" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://api.lorem.space/image/shoes?w=400&h=225"
                  alt="Shoes"
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title text-secondary">
                  Praesent ut lobortis purus hasellus libero orci, accumsan.
                </h2>
                <p className="text-accent">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, veritatis temporibus. Quidem commodi accusamus iusto
                  repellendus non autem aliquam quibusdam.
                </p>
                <div class="card-actions justify-around mt-10">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="flex items-center text-xl">
                      <BiTimeFive className="text-primary mr-2" /> 7 March, 2022
                    </div>
                    <div className="flex justify-center items-center text-xl">
                      <FaComment className="text-primary mr-1" />
                      10
                      <BsShareFill className="text-primary ml-5 font-bold" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Blog;
