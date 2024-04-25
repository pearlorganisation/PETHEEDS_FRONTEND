
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import { LiaAngleLeftSolid } from "react-icons/lia";
import { LiaAngleRightSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';

const CategorySlider = ({ data }) => {
    function getRandomColorHex() {
        // Generate random values for red, green, and blue components
        const red = Math.floor(Math.random() * 256); // Random number between 0 and 255
        const green = Math.floor(Math.random() * 256); // Random number between 0 and 255
        const blue = Math.floor(Math.random() * 256); // Random number between 0 and 255

        // Convert the RGB values to a hex string
        const hex = "#" + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1);

        return hex;
    }

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
            < section className=" text-center space-y-3" >
                <p className="font-medium text-xl py-2 ">Category</p>

                <div className='flex gap-3 justify-center items-start flex-wrap relative w-fit mx-auto overflow-hidden'>
                    <div onClick={() => {
                        goPrev()
                    }} className='absolute z-40 left-0 rounded-lg h-full bg-gradient-to-r from-black/20 to-white/0 cursor-pointer w-20 flex justify-start items-center px-2'> <LiaAngleLeftSolid /> </div>
                    <div onClick={() => {
                        goNext()
                    }} className='absolute z-40 right-0 rounded-lg h-full bg-gradient-to-l from-black/20 to-white/0 cursor-pointer  w-20 flex justify-end items-center px-2'><LiaAngleRightSolid /></div>

                    <Swiper
                        ref={swiperRef}
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[]}
                        className=" container mx-auto flex gap-3 justify-center items-start flex-wrap "
                    >

                        {
                            data?.map(item => {
                                return <Link to={`/category/${item?._id}`} className='flex flex-col justify-center items-center cursor-pointer'><img className='size-24 border-4 border-yellow-200  object-center' src={item?.categoryImg} alt="" /> <div>{item?.title}</div> </Link>
                            })
                        }



                    </Swiper>
                </div>
            </section >
        </>
    )
}




export default CategorySlider