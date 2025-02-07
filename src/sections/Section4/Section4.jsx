"use client";

import { ProductCard, ScrollAnimatedIcon } from "@/components";
import products from "@/lib/product/product";
import { Tabs } from "antd";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const { TabPane } = Tabs;

const Section4 = () => {
  const categories = [
    { key: "1", title: "Men's Clothing" },
    { key: "2", title: "Women's Clothing" },
    { key: "3", title: "Kids' Clothing" },
    { key: "4", title: "Shoes" },
    { key: "5", title: "Accessories" },
    { key: "6", title: "Sports and Outdoor" },
    { key: "7", title: "Home Textiles" },
    { key: "8", title: "Electronics" },
    { key: "9", title: "Cosmetics" },
    { key: "10", title: "Mother and Baby" },
  ];

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  return (
    <div
      className="container px-5 lg:px-20 mb-8"
    >
      <div className="w-full relative">
        <Tabs
          tabBarStyle={{
            display: "flex",
            overflowX: "auto",
            whiteSpace: "nowrap",
            cursor: "grab",
          }}
          scroll={{ x: "max-content" }}
          tabBarExtraContent={null}
        >
          {categories.map((category) => {
            const shuffledProducts = shuffleArray(products);
            return (
              <TabPane
                tab={
                  <span className="font-raleway font-bold text-sm text-white p-2 bg-secondary rounded-lg uppercase">
                    {category.title}
                  </span>
                }
                key={category.key}
              >
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
                  navigation={true}
                  modules={[Navigation]}
                  className="section4"
                >
                  {shuffledProducts.map((product, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <ProductCard product={product} />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </TabPane>
            );
          })}
        </Tabs>
      </div>
    </div>
  );
};

export default Section4;
