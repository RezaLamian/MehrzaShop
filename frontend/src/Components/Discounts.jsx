import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Discounts = () => {
  return (
    <div className="flex !flex-wrap gap-8 md:gap-4 items-center">
      <Swiper
        className="md:flex-[2]"
        spaceBetween={15}
        centeredSlides={true}
        loop={true}
        speed={200}
        navigation={true}
      >
        <SwiperSlide>
          <img src="/images/sliderphoto1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/sliderphoto2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/sliderphoto3.jpg" />
        </SwiperSlide>
      </Swiper>
      <div className="md:flex-1">
        <div className="flex flex-col gap-4">
          <img
            src="/images/sliderphoto1.jpg"
            className="rounded-lg cursor-pointer"
            alt=""
          />
          <img
            src="/images/discount-gif.gif"
            className="rounded-lg cursor-pointer"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Discounts;
