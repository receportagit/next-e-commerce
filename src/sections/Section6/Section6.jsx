"use client";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Section6 = () => {
  const banner1 = [
    {
      imagePath: "/banner/banner9.jpg",
    },
    {
      imagePath: "/banner/banner10.jpg",
    },
    {
      imagePath: "/banner/banner11.jpg",
    },
  ];

  const banner2 = [
    {
      imagePath: "/banner/banner5.jpg",
    },
    {
      imagePath: "/banner/banner6.jpg",
    },
    {
      imagePath: "/banner/banner7.jpg",
    },
    {
      imagePath: "/banner/banner12.jpg",
    },
  ];

  return (
    <div
      className="container px-5 lg:px-10 mb-8"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      <div className="flex justify-between items-center">
        <h3 className="font-lato font-semibold text-xl uppercase">
          Editor's Picks
        </h3>
      </div>
      <div className="w-full my-2 relative">
        <div className="w-full h-1 bg-gray-200 rounded-full">
          <div className="h-1 bg-secondary rounded-full"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
        {/* Sol Taraftaki Tekli Swiper */}
        <div className="col-span-full md:col-span-3 flex md:h-[100%]">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay]}
            className="reactive"
          >
            {banner1.map((banner, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-full">
                  <img
                    src={banner.imagePath}
                    alt="Product Image"
                    className="object-cover w-full h-[calc(100%)]"
                  />
                  <div className="absolute inset-0 bg-black opacity-40"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Sağ Taraftaki Geniş Swiper */}
        <div className="col-span-full md:col-span-9 flex md:h-[100%]">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            effect={"fade"}
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation, EffectFade]}
          >
            {banner2.map((banner, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-full">
                  <img
                    src={banner.imagePath}
                    alt="hero-banner1"
                    className="object-cover w-full h-[calc(100%)]"
                  />
                </div>
                <div className="absolute inset-0 bg-black opacity-40"></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Section6;
