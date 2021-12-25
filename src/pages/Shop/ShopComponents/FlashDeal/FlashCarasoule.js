import React from 'react';
import Slider from 'react-slick';
import { Card } from 'react-bootstrap';
import FlashDealCard from './FlashDealCard';
import FlashDealCardData from '../CardsData/FlashDealData';
// import './FlashDeal.css';
import Icon from '@mui/icons-material/BoltOutlined';
const FlashSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
      border="danger"
      style={{ backgroundColor: 'rgb(255,208,211)' }}
    >
      <Card.Header className="border-0">
        <h2>
          <Icon style={{ fontSize: '35px' }} /> Flash sale
        </h2>
      </Card.Header>
      <Slider {...settings}>
        {FlashDealCardData.products.map((product) => (
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
export default FlashSlider;
