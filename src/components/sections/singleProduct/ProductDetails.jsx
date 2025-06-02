"use client";
import Image from "next/image";
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "./style.css";

import { Thumbs } from "swiper/modules";

function ProductDetails({ product }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3  gap-4">
      <div>
        <Swiper
          direction="horizontal"
          breakpoints={{
            1024: {
              slidesPerView: 3,
              direction: "vertical",
            },
          }}
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={2}
          watchSlidesProgress={true}
          grabCursor={true}
          modules={[Thumbs]}
          className="mySwiperCustom"
        >
          {product.images.map((productImage, index) => (
            <SwiperSlide key={index}>
              <Image
                src={productImage}
                alt={product.title}
                width={600}
                height={900}
                priority
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="col-span-2">
        <Swiper
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Thumbs]}
          className="mySwiper2"
        >
          {product.images.map((productImage, index) => (
            <SwiperSlide key={index}>
              <Image
                src={productImage}
                alt={product.title}
                width={600}
                height={900}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ProductDetails;
