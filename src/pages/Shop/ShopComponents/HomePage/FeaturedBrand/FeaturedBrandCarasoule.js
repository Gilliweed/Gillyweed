import { Card } from 'react-bootstrap';
import FlashDealCard from './FeaturedBrandCard';
import FeaturedBrandData from '../CardsData/FeaturedBrandData';
// import './FeaturedBrand.css';
import Icon from '@mui/icons-material/BrandingWatermark';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { NavLink } from 'react-router-dom';
const FeaturedBrandSlider = () => {
  return (
    <Card
      className="border-0 "
      // border="success"
      // style={{ backgroundColor: 'rgb(196 224 191 / 38%)' }}
    >
      <Card.Header className="border-0" style={{ backgroundColor: 'white' }}>
        
        <div className='flex ml-1'>
          <Icon style={{ fontSize: '55px' }} /> 
          <h2 className=' text-5xl'>Featured Products</h2>
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
        {FeaturedBrandData.products.map((product) => (
          <SwiperSlide style={{ backgroundColor: '' }}>
            <FlashDealCard
              img={product.img}
              para={product.text}
              head={product.h1}
              price = {product.price}
            ></FlashDealCard>
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
    </Card>
  );
};
export default FeaturedBrandSlider;
