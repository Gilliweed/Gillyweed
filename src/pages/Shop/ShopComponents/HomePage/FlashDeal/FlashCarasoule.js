import React from 'react';
import { Card } from 'react-bootstrap';
import FlashDealCard from './FlashDealCard';
import FlashDealCardData from '../CardsData/FlashDealData';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Icon from '@mui/icons-material/BoltOutlined';
import { NavLink } from 'react-router-dom';


const FlashSlider = () => {
  return (
    <>
      <div className=" border-0 " style={{
            // width: '95%',
          }}>
        <Card.Header className="border-0" style={{ backgroundColor: 'white' }}>
          <h2>
            <Icon style={{ fontSize: '35px' }} /> Flash Sale
          </h2>
        </Card.Header>
        <Swiper
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            '@0.00': {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            '@0.75': {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            '@1.00': {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            '@1.50': {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            '@2.00': {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          className="mySwiper"
          style={{
            width: '95%',
          }}
        >
          {FlashDealCardData.products.map((product) => (
            <SwiperSlide style={{ backgroundColor: '' }}>
              <FlashDealCard
                img={product.img}
                para={product.text}
                head={product.h1}
              ></FlashDealCard>
            </SwiperSlide>
          ))}
        </Swiper>
        <Card.Header
          className="border-0 text-right"
          style={{ backgroundColor: 'white' }}
        >
          <Card.Link className="text-right" href="#">
          <NavLink to="/moreProducts" exact style={{ color: "black" }}>More</NavLink>
          </Card.Link>
        </Card.Header>
      </div>
    </>
  );
};
export default FlashSlider;
