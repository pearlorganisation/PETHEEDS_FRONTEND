import { useNavigate } from "react-router-dom";
import img from "../../../../Images for Website/Aloevera Shampoo 250 ML/2.png";
import img2 from "../../../../Images for Website/Aloevera Shampoo 500 ML/2.png";
import { FaShoppingCart } from "react-icons/fa";
import img3 from "../../../../Images for Website/Bang On Ticks/1.png";
import img4 from "../../../../Images for Website/Bang On Ticks/2.png";
import img5 from "../../../../Images for Website/Bang On Ticks/3.png";
import img6 from "../../../../Images for Website/Bang On Ticks/4.png";
import img7 from "../../../../Images for Website/Bone and Joint and Motleyvit Combo/1.png";
import img8 from "../../../../Images for Website/Bone and Joint and Motleyvit Combo/2.png";
import img9 from "../../../../Images for Website/Bone and Joint and Motleyvit Combo/3.png";
import img10 from "../../../../Images for Website/Bone and Joint and Motleyvit Combo/4.png";
import img11 from "../../../../Images for Website/Bone and Joint and Motleyvit Combo/5.png";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../features/slices/cartSlice";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const products = [
  {
    id: 1,
    name: "Earthen Bottle ",
    quantity: "500ml",
    items: 1,
    href: "#",
    price: 500,
    ourprice: 450,
    imageSrc: img,
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },

  {
    id: 2,
    name: "Nomad Tumbler",
    quantity: "250ml",
    items: 1,
    href: "#",
    price: 500,
    ourprice: 450,
    imageSrc: img11,
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },

  {
    id: 3,
    name: "Earthen Bottle",
    quantity: "250ml",
    items: 1,
    href: "#",
    price: 500,
    ourprice: 450,
    imageSrc: img3,
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },

  {
    id: 4,
    name: "Nomad Tumbler",
    quantity: "250ml",
    items: 1,
    href: "#",
    price: 500,
    ourprice: 450,
    imageSrc: img4,
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },

  {
    id: 5,
    name: "Earthen Bottle",
    quantity: "250ml",
    items: 1,
    href: "#",
    price: 500,
    ourprice: 450,
    imageSrc: img5,
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },

  {
    id: 6,
    name: "Nomad Tumbler",
    quantity: "250ml",
    items: 1,
    href: "#",
    price: 500,
    ourprice: 450,
    imageSrc: img6,
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },

  {
    id: 7,
    name: "Nomad Tumbler",
    quantity: "250ml",
    items: 1,
    href: "#",
    price: 500,
    ourprice: 450,
    imageSrc: img7,
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },

  {
    id: 8,
    name: "Nomad Tumbler",
    quantity: "250ml",
    items: 1,
    href: "#",
    price: 500,
    ourprice: 450,
    imageSrc: img8,
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },

  {
    id: 9,
    name: "Nomad Tumbler",
    quantity: "250ml",
    items: 1,
    href: "#",
    price: 350,
    ourprice: 450,
    imageSrc: img9,
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },

  {
    id: 10,
    name: "Nomad Tumbler",
    quantity: "250ml",
    items: 1,
    href: "#",
    price: 350,
    ourprice: 450,
    imageSrc: img10,
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },

  {
    id: 11,
    name: "Nomad Tumbler",
    quantity: "250ml",
    items: 1,
    href: "#",
    price: 350,
    ourprice: 450,
    imageSrc: img2,
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },

  {
    id: 12,
    name: "Nomad Tumbler 250ml ",
    quantity: "250ml",
    items: 1,
    href: "#",
    price: 350,
    ourprice: 450,
    imageSrc: img2,
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
];

export default function ProductList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handelnavigate = () => {
    navigate("/singleproduct");
  };
  const handelcart = () => {
    navigate("/cart");
  };
  return (
    <>
      <div className="container mx-auto my-5 ">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex justify-center items-center ">
              <img
                className="rounded-lg"
                src="https://headsupfortails.com/cdn/shop/files/dd-web-65d736c0b38bc_1500x.webp?v=1708611678"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center">
              <img
                className="rounded-lg"
                src="https://headsupfortails.com/cdn/shop/files/treats-web-65d736dde8a86_1500x.webp?v=1708611625"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center">
              <img
                className="rounded-lg"
                src="https://headsupfortails.com/cdn/shop/files/grooming-web-65d736d81ec69_1500x.webp?v=1708611646"
              />
            </div>
          </SwiperSlide>
          <div className="flex justify-center items-center">
            <SwiperSlide>
              <img
                className="rounded-lg"
                src="https://headsupfortails.com/cdn/shop/files/saras-web-65d736da0ed77_1500x.webp?v=1708611605"
              />
            </SwiperSlide>
          </div>
        </Swiper>
      </div>

      <div className="grid md:grid-cols-2 md:grid-rows-2 gap-3 container mx-auto p-5 border-red-500">
        <div>
          <img src="https://headsupfortails.com/cdn/shop/files/grain-free-web-01-65e08bd2dca7d.webp?v=1709214839" />
        </div>
        <div>
          <img src="https://headsupfortails.com/cdn/shop/files/hypoallergenic_web_02_b1c2e966-7195-4b23-a765-165e250bb676.webp?v=1709716942" />
        </div>
        <div>
          <img src="https://headsupfortails.com/cdn/shop/files/flavours-of-india-web-03-65e08bd4cf3d9.webp?v=1709214910" />
        </div>
        <div>
          <img src="https://headsupfortails.com/cdn/shop/files/classic-web-04-65e08bd51a648.webp?v=1709214921" />
        </div>
      </div>
      <div className=" max-w-screen-xl px-4 py-8 mx-auto">
      <h5 className=" font-bold text-2xl mb-4">○ New In Store</h5>
      <div className="grid grid-cols-4 gap-4 ">
        <img className="rounded-md" src="https://headsupfortails.com/cdn/shop/files/sassy-sausages-web-65d736c98424c.webp?v=1708611835"  alt="product"/>
        <img className="rounded-md" src="https://headsupfortails.com/cdn/shop/files/trooper-mob.webp?v=1709213470"  alt="product"/>
        <img className="rounded-md" src="https://headsupfortails.com/cdn/shop/files/perfumes-web-65d736c804b8e.webp?v=1708612074"  alt="product"/>
        <img className="rounded-md" src="https://headsupfortails.com/cdn/shop/files/calcium-web-65d736c93dd5d.webp?v=1708611971"  alt="product"/>
      </div>
     </div>

     <div className=" max-w-screen-xl px-4 py-8 mx-auto">
      <h5 className=" font-bold text-2xl mb-4">○ Specials By Price</h5>
      <div className="grid grid-cols-4 gap-4 ">
        <div className="flex justify-center items-center space-x-5 rounded-xl border h-20 bg-gradient-to-b from-slate-50 to-amber-100">
            <div className=" font-extrabold text-4xl">
            ₹199</div>
            <div className=" h-6 text-2xl text-gray-500">
           & Under</div>
           <div className="">
            <img className="h-10 rounded-full" src="https://img.freepik.com/free-vector/isolated-gold-coin-cartoon-style_1308-87635.jpg" alt="coin"/>
           </div>
            </div>
        <div className="flex justify-center items-center space-x-5 rounded-xl border h-20 bg-gradient-to-b from-slate-50 to-amber-100">
            <div className=" font-extrabold text-4xl">
            ₹299</div>
            <div className=" h-6 text-2xl text-gray-500">
           & Under</div>
           <div className="">
            <img className="h-10" src="https://img.freepik.com/free-vector/isolated-gold-coin-cartoon-style_1308-87635.jpg" alt="coin"/>
           </div>
            </div>
        <div className="flex justify-center items-center space-x-5 rounded-xl border h-20 bg-gradient-to-b from-slate-50 to-amber-100">
            <div className=" font-extrabold text-4xl">
            ₹399</div>
            <div className=" h-6 text-2xl text-gray-500">
           & Under</div>
           <div className="">
            <img className="h-10" src="https://img.freepik.com/free-vector/isolated-gold-coin-cartoon-style_1308-87635.jpg" alt="coin"/>
           </div>
            </div>
        <div className="flex justify-center items-center space-x-5 rounded-xl border h-20 bg-gradient-to-b from-slate-50 to-amber-100">
            <div className=" font-extrabold text-4xl">
            ₹499</div>
            <div className=" h-6 text-2xl text-gray-500">
           & Under</div>
           <div className="">
            <img className="h-10" src="https://img.freepik.com/free-vector/isolated-gold-coin-cartoon-style_1308-87635.jpg" alt="coin"/>
           </div>
            </div>
          
          
          </div>
    
     </div>


      <section
        id="Projects"
        class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {products.map((el, id) => {
          return (
            <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
              {/* <a href="#">
                <img
                  src={el.imageSrc}
                  alt="Product"
                  class="h-80 w-72 object-cover rounded-t-xl"
                />
                <div class="px-4 py-3 w-72">
                  <span class="text-gray-400 mr-3 uppercase text-xs">
                    Brand
                  </span>
                  <p class="text-lg font-bold text-black truncate block capitalize">
                    {el.name}
                  </p>
                  <div class="flex items-center">
                    <p class="text-lg font-semibold text-black cursor-auto my-3">
                      {el.ourprice}
                    </p>
                    <del>
                      <p class="text-sm text-gray-600 cursor-auto ml-2">
                        {el.price}
                      </p>
                    </del>
                    <div
                      onClick={() => {
                        dispatch(addToCart(el));
                      }}
                      class="ml-auto"
                    >
                      cart
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-bag-plus"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                        />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a> */}

              <a href="#">
                <img
                   src={el.imageSrc}
                  alt="Product"
                  class="h-80 w-72 object-cover rounded-t-xl"
                />
                <div class="px-4 py-3 w-72">
                  <span class="text-gray-400 mr-3 uppercase text-xs">
                    Brand
                  </span>
                  <p class="text-lg font-bold text-black truncate block capitalize">
                    {el.name}
                  </p>
                  <div class="flex flex-col">
                    <p class="text-lg font-semibold text-black cursor-auto mt-3 ">
                      {el.ourprice}
                    </p>
                    <div className="flex items-center">
                      <del className="text-slate-600 mt-3 mb-3 mr-3">
                        <p class="text-sm text-slate-500 cursor-auto ml-2 ">
                          {el.price}
                        </p>
                      </del>
                      <p className="border py-1 px-1 rounded-md  text-xs font-semibold text-white bg-indigo-600">
                        10% OFF
                      </p>
                    </div>
                    <div className="flex mb-3">
                      <button className="border border-slate-400 rounded-md text-xs p-1 mr-2 text-slate-600 hover:bg-[#4F46E5] hover:text-white hover:border-none">
                        450ml
                      </button>
                      <button className="border border-slate-400 rounded-md text-xs p-1 text-slate-600 hover:bg-[#4F46E5] hover:text-white hover:border-none">
                        450ml
                      </button>
                    </div>
                    <button className="rounded-lg border bg-blue-700 hover:bg-blue-800 h-12 flex items-center justify-center"  onClick={() => {
                            dispatch(addToCart(el));
                          }}>
                      <div className="mr-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="white"
                          class="bi bi-bag-plus"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                          />
                          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg>
                      </div>

                      <div
                        
                         
                          className="text-white font-semibold"
                        >
                          ADD TO CART
                       
                      </div>
                    </button>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </section>
    </>
  );
}