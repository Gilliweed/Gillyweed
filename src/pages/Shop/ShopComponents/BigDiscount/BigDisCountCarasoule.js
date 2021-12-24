import React , { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import "./BigDiscount.css";
export default function BigDisCountCarasoule() {
  return (
    <div>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
}
