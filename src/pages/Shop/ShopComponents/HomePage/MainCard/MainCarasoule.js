import React from 'react';
import Slider from 'react-slick';
import { Card } from 'react-bootstrap';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectFade } from 'swiper';
import 'swiper/css/effect-fade';
import MainCard from './MainCards';
import MainCardData from '../CardsData/MainCardData';
const ItemSlider = () => {
  return (
    <Card className="container border-0 ">
      <Swiper
        style={{ width: '100%' }}
        navigation={true}
        className="mySwiper "
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        effect={'fade'}
      >
        {MainCardData.map((product) => (
          <SwiperSlide style={{ backgroundColor: '' }}>
            <MainCard
              img1={product.img1}
              img2={product.img2}
              img3={product.img3}
              img4={product.img4}
              img5={product.img5}
              img6={product.img6}
              img7={product.img7}
              para={product.text}
              head={product.h1}
            ></MainCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </Card>
  );
};

export default ItemSlider;
