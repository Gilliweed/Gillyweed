import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { NavLink } from 'react-router-dom';
import SwiperCore, {Autoplay,Navigation} from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import { Card } from 'react-bootstrap';
import BigDiscount from './BigDiscountCard';
import BigDiscountData from '../CardsData/BigDiscountData';
import Icon from '@mui/icons-material/BrandingWatermark';
import Btn from '../../../../../components/btn/btn';
SwiperCore.use([Autoplay,Navigation]);

const BigDiscountSlider = () => {
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
      <div className="bg-indigo-600 rounded-t-3xl my-3 text-white">
      <Card.Header className="border-0" >
          
          <div className='flex my-4'>
          <h2 className=' text-5xl mx-auto'>Big Discount</h2>
          </div>
        </Card.Header>
      </div>
        
        <Swiper
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
              slidesPerView: 3,
              spaceBetween: 20,
            },
            '@1.50': {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            '@2.00': {
              slidesPerView: 3,
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
          <Btn link="/moreProducts" title="More" styles="bg-red-400 text-white"/>
           
            
          </Card.Link>
        </Card.Header>
      </div>
    </>
  );
};
export default BigDiscountSlider;
