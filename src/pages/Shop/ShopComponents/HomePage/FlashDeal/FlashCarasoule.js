import React from 'react';
import { Card } from 'react-bootstrap';
import FlashDealCard from './FlashDealCard';
import FlashDealCardData from '../CardsData/FlashDealData';
import { Swiper, SwiperSlide } from 'swiper/react';
import Icon from '@mui/icons-material/BoltOutlined';
import { NavLink } from 'react-router-dom';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import Btn from '../../../../../components/btn/btn';
import 'swiper/css';
import 'swiper/css/navigation';

const FlashSlider = () => {
  SwiperCore.use([Autoplay, Pagination, Navigation]);
  return (
    <>
      <div
        className="mx-4 border-0 "
        style={
          {
            // width: '95%',
          }
        }
      >
        <Card.Header className="border-0" style={{ backgroundColor: 'white' }}>
          <div className="block bg-slate-400 pb-32 pt-8 px-8 rounded-t-3xl">
            <h2 className=" text-5xl font-semibold text-white italic font-mono">
              Flash Sale
            </h2>
          </div>
        </Card.Header>
        <Swiper
          pagination={{
            clickable: true,
            pagination: true,
          }}
          navigation={true}
          breakpoints={{
            '@0.00': {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            '@0.75': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '@1.00': {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            '@1.50': {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            '@2.00': {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          className="mySwiper relative -mt-20"
          style={{
            width: '95%',
          }}
        >
          {FlashDealCardData.products.map((product) => (
            <SwiperSlide
              style={{ backgroundColor: '' }}
              className="rounded-3xl"
            >
              <FlashDealCard
                img={product.img}
                para={product.text}
                head={product.h1}
                price={product.price}
              ></FlashDealCard>
            </SwiperSlide>
          ))}
        </Swiper>
        <Card.Header
          className="border-0 text-right"
          style={{ backgroundColor: 'white' }}
        >
          <Card.Link className="text-right" href="#">
            <Btn link="/moreProducts" title="More" styles="bg-red-400 text-white" />

          </Card.Link>
        </Card.Header>
      </div>
    </>
  );
};
export default FlashSlider;
