import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ProductPhotosSlider = ({ closeBtn }) => {
  return (
    <div className="hidden 2xl:flex flex-col fixed top-40 z-50 gap-8 xl:w-[1350px] bg-white dark:bg-zinc-700 rounded-xl p-8 shadow-lg">
      <div className="flex justify-between text-3xl text-slate-600 dark:text-slate-300 border-b-2 pb-8 border-slate-300 dark:border-slate-600">
        <h1>تصاویر محصول کفش پیاده روی مردانه نیو بالانس مدل Mdrftlm2</h1>
        <AiOutlineClose
          onClick={() => closeBtn(false)}
          className="cursor-pointer text-3xl"
        />
      </div>
      <div className="relative">
        <Swiper className="cursor-pointer" loop={true} speed={200}>
          <SwiperSlide>
            <img
              src="/images/p1.png"
              className="mx-auto w-[40rem] h-[45rem]"
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="/images/p2.png"
              className="mx-auto w-[40rem] h-[45rem]"
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="/images/p3.png"
              className="mx-auto w-[40rem] h-[45rem]"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ProductPhotosSlider;
