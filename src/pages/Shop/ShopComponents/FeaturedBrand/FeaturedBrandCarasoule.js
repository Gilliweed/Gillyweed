import React from 'react';
import Slider from 'react-slick';
import { Card, Row, Col } from 'react-bootstrap';
import FlashDealCard from './FeaturedBrandCard';
import FeaturedBrandData from '../CardsData/FeaturedBrandData';
// import './FeaturedBrand.css';
import Icon from '@mui/icons-material/BrandingWatermark';
const FeaturedBrandSlider = () => {
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
      border="success"
      style={{ backgroundColor: 'rgb(196 224 191 / 38%)' }}
    >
      <Card.Header className="border-0">
        <h2>
          <Icon style={{ fontSize: '35px' }} /> Featured Brand
        </h2>
      </Card.Header>

      <Slider {...settings}>
        {FeaturedBrandData.products.map((product) => (
          <FlashDealCard
            img={product.img}
            para={product.text}
            head={product.h1}
          ></FlashDealCard>
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
export default FeaturedBrandSlider;
