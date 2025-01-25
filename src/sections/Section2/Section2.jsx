"use client";

import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../../components/ProductCard/ProductCard";
import product from "../../lib/product/product";

const Section2 = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.on("slideChange", () => {
        setCurrentIndex(swiperInstance.realIndex);
      });
    }
  }, [swiperInstance]);

  return (
    <div className="container px-5 lg:px-20 mb-8" data-aos="fade-up">
      <div className="flex justify-between items-center">
        <h3 className="font-lato font-semibold text-xl uppercase">
          Best of the week
        </h3>
        <div className="flex gap-3">
          <div className="btn-prev cursor-pointer rounded p-0.5 border-2 border-secondary bg-neutral hover:bg-accent transition-all duration-300 ease-in-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 md:size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
              />
            </svg>
          </div>
          <div className="btn-next cursor-pointer rounded p-0.5 border-2 border-secondary bg-neutral hover:bg-accent transition-all duration-300 ease-in-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 md:size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* Progress Bar instead of numbers */}
      <div className="w-full my-2 relative">
        <div className="w-full h-1 bg-gray-200 rounded-full">
          <div
            className="h-1 bg-secondary rounded-full"
            style={{
              width: `${((currentIndex + 1) / product.length) * 100}%`,
            }}
          ></div>
        </div>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 8,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 8,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 8,
          },
        }}
        navigation={{
          prevEl: ".btn-prev",
          nextEl: ".btn-next",
        }}
        modules={[Navigation]}
        onSwiper={setSwiperInstance}
        className="section2"
      >
        {product.map((product, index) => (
          <SwiperSlide key={index}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Section2;
