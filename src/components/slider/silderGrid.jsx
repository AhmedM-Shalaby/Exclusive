"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid } from "swiper/modules";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import "./sliderStyle.css";

import { useId } from "react";

export default function SliderGrid({ content }) {
  const uniqueId = useId();

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Grid]}
        navigation={{
          prevEl: `.custom-prev-${uniqueId}`,
          nextEl: `.custom-next-${uniqueId}`,
        }}
        grid={{
          rows: 2,
          fill: "row", // ✅ مهم جداً (الافتراضي هو 'column')
        }}
        slidesPerView={5}
        spaceBetween={20}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
        className="mySwiper"
      >
        {content.map((element, index) => (
          <SwiperSlide key={index}>{element}</SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute top-[-50px] right-[40px] ">
        <button
          className={`custom-prev-${uniqueId} absolute top-1/2 right-2 transform -translate-y-1/2 bg-[#F5F5F5] text-black p-2 rounded-full z-10 hover:bg-gray-600 transition-all`}
        >
          <HiChevronLeft size={24} />
        </button>
        <button
          className={`custom-next-${uniqueId} absolute top-1/2 left-2 transform -translate-y-1/2 bg-[#F5F5F5] text-black p-2 rounded-full z-10 hover:bg-gray-600 transition-all`}
        >
          <HiChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
