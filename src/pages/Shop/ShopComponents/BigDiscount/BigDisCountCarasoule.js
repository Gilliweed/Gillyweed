import React from 'react';
import Slider from 'react-slick';
import { Card } from 'react-bootstrap';
import BigDiscount from './BigDiscountCard';
import BigDiscountData from '../CardsData/BigDiscountData';
// import './FeaturedBrand.css';
import Icon from '@mui/icons-material/BrandingWatermark';
const BigDiscountSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Card
      className="container "
      border="primary"
      style={{ backgroundColor: 'rgb(250,255,251)' }}
    >
      <Card.Header className="border-0">
        <h2>
          <Icon style={{ fontSize: '35px' }} /> Big Discount
        </h2>
      </Card.Header>

      <Slider {...settings}>
        {BigDiscountData.products.map((product) => (
          <BigDiscount
            img={product.img}
            para={product.text}
            head={product.h1}
          ></BigDiscount>
        ))}
      </Slider>
      <Card.Header className="border-0 text-right">
        <Card.Link className="text-right" href="#">
          More
        </Card.Link>
      </Card.Header>
    </Card>
  );
};
export default BigDiscountSlider;
