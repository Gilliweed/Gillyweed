import React from 'react';
import Slider from 'react-slick';
import { Card } from 'react-bootstrap';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import MainCard from './MainCards';
import MainCardData from '../CardsData/MainCardData';
const ItemSlider = () => {
  return (
    <Card className="container border-0 ">
      <Swiper
        style={{
          width: '100%',
        }}
      >
        {MainCardData.map((product) => (
          <SwiperSlide style={{ backgroundColor: '' }}>
            <MainCard
              img={product.img}
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
