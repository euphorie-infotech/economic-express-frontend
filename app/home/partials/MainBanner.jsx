"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCreative, Autoplay, Pagination, Navigation } from "swiper";
import BannerItem from "./BannerItem";

const MainBanner = () => {
  return (
    <>
      <Swiper
        grabCursor={true}
        effect={"creative"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        loop={true}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative, Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <BannerItem />
        </SwiperSlide>
        <SwiperSlide>
          <BannerItem />
        </SwiperSlide>
        <SwiperSlide>
          <BannerItem />
        </SwiperSlide>
        <SwiperSlide>
          <BannerItem />
        </SwiperSlide>
        <SwiperSlide>
          <BannerItem />
        </SwiperSlide>
        <SwiperSlide>
          <BannerItem />
        </SwiperSlide>
        <SwiperSlide>
          <BannerItem />
        </SwiperSlide>
        <SwiperSlide>
          <BannerItem />
        </SwiperSlide>
        <SwiperSlide>
          <BannerItem />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default MainBanner;
