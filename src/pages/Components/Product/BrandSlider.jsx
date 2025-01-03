import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { LiaAngleLeftSolid } from "react-icons/lia";
import { LiaAngleRightSolid } from "react-icons/lia";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BrandSlider = () => {
  const { productsData, isLoading, totalPages, brands } = useSelector(
    (state) => state.products
  );

  const swiperRef = useRef(null);
  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <>
      <section className=" text-center space-y-3 container mx-auto py-5">
        <p className="flex justify-center font-bold text-2xl md:text-4xl mb-8 items-center">
          Brands
        </p>

        <div className="flex justify-center items-center relative">
          <div
            onClick={() => {
              goPrev();
            }}
            className="z-40 rounded-lg h-full  cursor-pointer w-8 flex justify-start items-center px-2"
          >
            {" "}
            <LiaAngleLeftSolid size={40} />{" "}
          </div>

          <Swiper
            ref={swiperRef}
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 50,
              },
            }}
            modules={[]}
            className=" w-full"
          >
            <div className="">
              {isLoading
                ? Array(1)
                  .fill(true)
                  .map((item) => {
                    return (
                      <div class="animate-pulse mx-12 shadow-md">
                        <div class="flex  flex-col justify-center items-center cursor-pointer">
                          <div class="size-32 md:size-48 lg:size-60 rounded-full bg-gray-200 "></div>
                        </div>
                      </div>
                    );
                  })
                : brands?.map((item) => {
                  return (
                    <SwiperSlide className=" w-full">
                      {" "}
                      <Link
                        to={`/product?brand=${item?._id}`}
                        className="flex flex-col justify-center items-center cursor-pointer w-full"
                      >
                        <img
                          className=" h-[205px]  object-center"
                          src={item?.brandBanner}
                          // src="https://headsupfortails.com/cdn/shop/files/sassy-sausages-web-65d736c98424c.webp?v=1708611835"
                          alt="product"
                          onError={(event) => {
                            event.target.src = "/placeholder.jpg";
                            event.onerror = null;
                          }}
                        />{" "}
                        <div>{item?.title}</div>{" "}
                      </Link>{" "}
                    </SwiperSlide>
                  );
                })}
            </div>
          </Swiper>

          <div
            onClick={() => {
              goNext();
            }}
            className="z-40  rounded-lg h-full  cursor-pointer  w-8 flex justify-end items-center px-2"
          >
            <LiaAngleRightSolid size={40} />
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandSlider;
