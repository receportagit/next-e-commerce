"use client";

import { SwiperContent } from "@/components";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Section1 = () => {
  const swiper = [
    {
      imagePath: "/banner/banner1.jpg",
      title: "Explore the Winter Collection",
      description:
        "Stay warm and stylish with our exclusive winter collection. Perfect for the cold season.",
    },
    {
      imagePath: "/banner/banner2.jpg",
      title: "Summer Vibes",
      description:
        "Feel the breeze with our lightweight and colorful summer outfits. Comfort meets fashion.",
    },
    {
      imagePath: "/banner/banner3.jpg",
      title: "Adventure Awaits",
      description:
        "Gear up for your next adventure with our durable and trendy outdoor essentials.",
    },
  ];

  return (
    <div className="mb-8">
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
        className="main-swiper"
      >
        {swiper.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <SwiperContent
                imagePath={slide.imagePath}
                title={slide.title}
                description={slide.description}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Section1;
