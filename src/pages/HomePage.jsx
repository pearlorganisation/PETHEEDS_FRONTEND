import dog from "../images/dog.jpg";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaRegHandshake } from "react-icons/fa";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { BsCheckCircleFill } from "react-icons/bs";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import Herosection from "./Components/herosection/Herosection";
import Stats from "./Components/Stats/Stats";
import Ourvision from "./Components/Ourvision/Ourvision";
import Booking from "./Components/Booking";
import OurService from "./Components/OurService/Ourservice";
import { useDispatch, useSelector } from "react-redux";
import { createHomebanner } from "../features/actions/HomebannerAction";
import { Link } from "react-router-dom";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(createHomebanner());
  }, []);

  const { isLoading, productsData } = useSelector((state) => state.HomeBanner);
  console.log(productsData, "datat");

  return (
    <div className="md:px-12 pt-6 md:pt-0 ">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 4000 }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {isLoading ? (
          <div class="w-full h-[45rem] animate-pulse">
            <section class="bg-white h-full flex justify-center items-start md:items-center">
              <div class="grid gap-3 md:gap-28 px-4 py-8 md:grid-cols-2">
                <div class="lg:mt-0 lg:grid bg-slate-100 p-3 grid place-items-center h-full">
                  <div class="md:size-[30rem] size-[20rem] rounded bg-gray-200"></div>
                </div>
                <div class="flex justify-center items-center h-full">
                  <div class="space-y-4 text-center md:text-left w-full">
                    <div class="inline-flex w-full items-center justify-center py-2 px-3 md:px-5 md:py-3 mr-3 h-10 bg-gray-200 rounded-lg"></div>
                    <div class="inline-flex w-[70%] items-center justify-center py-2 px-3 md:px-5 md:py-3 mr-3 h-10 bg-gray-200 rounded-lg"></div>

                    <div class="inline-flex w-[90%] items-center justify-center py-2 px-3 md:px-5 md:py-3 mr-3 h-10 bg-gray-200 rounded-lg"></div>

                    <div className="flex gap-4">
                      <div class="inline-flex w-full items-center justify-center py-2 px-3 md:px-5 md:py-3 h-14 bg-gray-200 rounded-lg"></div>
                      <div class="inline-flex w-[60%] items-center justify-center py-2 px-3 md:px-5 md:py-3 h-14 bg-gray-200 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        ) : (
          productsData?.map((el, id) => {
            return (
              <>
                <SwiperSlide className="w-full !h-[45rem]">
                  <section class="bg-white  h-full flex justify-center items-start md:items-center">
                    <div class="grid gap-3 md:gap-28 px-4 py-8 md:grid-cols-2">
                      <div class="lg:mt-0  lg:grid  grid place-items-center  h-full">
                        <img
                          src={el?.banner}
                          alt="mockup"
                          class="md:size-[35rem]  size-[20rem] rounded"
                          onError={(event) => {
                            event.target.src =
                              "/placeholder.jpg";
                            event.onerror = null;
                          }}
                        />
                      </div>
                      <div class="flex justify-center items-center  h-full">
                        <div className="space-y-4 text-center md:text-left">
                          <h1 class="max-w-2xl mb-4 text-3xl font-semibold uppercase tracking-tight leading-none md:text-5xl xl:text-6xl text-slate-700 ">
                            {el.title}
                          </h1>

                          <Link
                            to="/productslist"
                            class="inline-flex items-center justify-center py-2 px-3 md:px-5 md:py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
                          >
                            Our Products
                            <svg
                              class="w-5 h-5 ml-2 -mr-1"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </Link>
                          <Link
                            to="/about"
                            class="inline-flex items-center justify-center py-2 px-3 md:px-5 md:py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 "
                          >
                            About us
                          </Link>
                        </div>
                      </div>
                    </div>
                  </section>
                </SwiperSlide>
              </>
            );
          })
        )}
      </Swiper>

      <section className="container mx-auto p-2 pt-10">
        <div className="text-center text-xl md:text-6xl font-semibold md:p-10">
          <h1 className="font-family:Raleway text-[#4b5563]">
            Welcome to PETHEEDS LLP
          </h1>
        </div>
        <div className="text-center text-xl md:text-2xl font-medium md:p-10 text-[#4B5563] ">
          <p>
            Established in 2021, PETHEEDS is dedicated to enhancing the health
            and well-being of pets through advanced nutraceutical solutions. As
            passionate advocates for animal health, we understand the profound
            bond between pets and their owners. That&#39;s why we&#39;re
            committed to providing premium- grade products that promote
            vitality, longevity, and happiness in every furry friend.
          </p>
        </div>
      </section>

      <Ourvision />

      <section class="w-full py-28 container  mx-auto">
        <div class="container grid items-center gap-6 px-4">
          <div class="space-y-2">
            <div class="text-center text-3xl font-medium">
              Why Choose PETHEEDS?
            </div>
            <p class="text-center text-base text-gray-500 ">
              The top 5 reasons to trust PETHEEDS for your pet's well-being.
            </p>
          </div>
          <div class="columns-1 md:columns-2 lg:columns-3 space-y-4 ">
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm w-full break-inside-avoid"
              data-v0-t="card"
            >
              <div class="flex flex-col space-y-1.5 p-6 pb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="w-6 h-6 text-blue-500"
                >
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                <h3 class="text-lg md:text-xl font-semibold  leading-none tracking-tight ">
                  Premium Quality
                </h3>
              </div>
              <div class="p-6 pt-0">
                <p>
                  We adhere to the highest standards of quality and safety,
                  ensuring that each product meets stringent regulatory
                  requirements and undergoes rigorous testing for purity and
                  efficacy.
                </p>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm w-full break-inside-avoid"
              data-v0-t="card"
            >
              <div class="flex flex-col space-y-1.5 p-6 pb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="w-6 h-6 text-red-500"
                >
                  <path d="M10 2v7.31"></path>
                  <path d="M14 9.3V1.99"></path>
                  <path d="M8.5 2h7"></path>
                  <path d="M14 9.3a6.5 6.5 0 1 1-4 0"></path>
                  <path d="M5.52 16h12.96"></path>
                </svg>
                <h3 class="text-lg md:text-xl font-semibold  leading-none tracking-tight">
                  Scientifically Formulated
                </h3>
              </div>
              <div class="p-6 pt-0">
                <p>
                  Our products are developed in collaboration with leading
                  veterinarians and nutritionists, utilizing the latest
                  scientific research to deliver optimal nutritional support for
                  pets of all ages and breeds.
                </p>
              </div>
            </div>

            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm w-full break-inside-avoid"
              data-v0-t="card"
            >
              <div class="flex flex-col space-y-1.5 p-6 pb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="w-6 h-6 text-green-500"
                >
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                </svg>
                <h3 class="text-lg md:text-xl font-semibold leading-none tracking-tight ">
                  Natural Ingredients
                </h3>
              </div>
              <div class="p-6 pt-0">
                <p>
                  We believe in the power of nature to promote healing and
                  vitality. That's why our products are crafted from the finest
                  natural ingredients, free from artificial additives, fillers,
                  or preservatives.
                </p>
              </div>
            </div>

            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm w-full break-inside-avoid"
              data-v0-t="card"
            >
              <div class="flex flex-col space-y-1.5 p-6 pb-4">
                <BsCheckCircleFill size={22} className="text-yellow-500" />
                <h3 class="text-lg md:text-xl font-semibold  leading-none tracking-tight ">
                  Tailored Solutions:
                </h3>
              </div>
              <div class="p-6 pt-0">
                <p>
                  Every pet is unique, with individual health needs and
                  preferences. That&#39;s why we offer a diverse range of
                  nutraceutical products tailored to address specific health
                  concerns, from joint support and digestive health to skin and
                  coat care.
                </p>
              </div>
            </div>

            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm w-full break-inside-avoid"
              data-v0-t="card"
            >
              <div class="flex flex-col space-y-1.5 p-6 pb-4">
                <FaRegHandshake size={25} className="text-blue-500" />
                <h3 class="text-lg md:text-xl  font-semibold leading-none tracking-tight">
                  Commitment to Excellence:
                </h3>
              </div>
              <div class="p-6 pt-0">
                <p>
                  Customer satisfaction is our top priority. We are dedicated to
                  providing exceptional service, expert guidance, and ongoing
                  support to ensure that you and your pet experience the full
                  benefits of our products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OurService />
      <Stats />

      <Herosection />
      <Booking />
    </div>
  );
};

export default HomePage;
