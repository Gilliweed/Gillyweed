import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { NavLink } from 'react-router-dom';

import { Card } from 'react-bootstrap';
import BigDiscount from './BigDiscountCard';
import BigDiscountData from '../CardsData/BigDiscountData';
import SwiperCore from 'swiper';
import Icon from '@mui/icons-material/BrandingWatermark';

SwiperCore.use([Pagination]);

const BigDiscountSlider = () => {
  return (
    <>
      <div
        className=" border-0 "
        style={
          {
            // width: '95%',
          }
        }
      >
        <Card.Header className="border-0" style={{ backgroundColor: 'white' }}>
          
          <div className='flex ml-2'>
          <Icon style={{ fontSize: '55px' }} /> 
          <h2 className=' text-5xl'>Big Discount</h2>
          </div>
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
          {BigDiscountData.products.map((product) => (
            <SwiperSlide style={{ backgroundColor: '' }}>
              <BigDiscount
                img={product.img}
                para={product.text}
                head={product.h1}
                price ={product.price}
                highprice = {product.highprice}
              ></BigDiscount>
            </SwiperSlide>
          ))}
        </Swiper>
        <Card.Header
          className="border-0 text-right"
          style={{ backgroundColor: 'white' }}
        >
          <Card.Link className="text-right" href="#">
            <NavLink to="/moreProducts" exact style={{ color: 'black' }}>
              More
            </NavLink>
           
            
          </Card.Link>
        </Card.Header>
      </div>
    </>
  );
};
export default BigDiscountSlider;
