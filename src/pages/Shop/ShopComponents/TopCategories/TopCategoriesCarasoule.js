import React from 'react';
import Slider from 'react-slick';
import { Card} from 'react-bootstrap';
import TopCategoriesCard from './TopCategoriesCard';
import TopCategroiesData from '../CardsData/TopCategroiesData';
// import './TopCategories.css';
import Icon from '@mui/icons-material/BoltOutlined';
const TopCategoriesSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
          <Icon style={{ fontSize: '35px' }} /> Top Categories
        </h2>
      </Card.Header>
      <Slider {...settings}>
        {TopCategroiesData.products.map((product) => (
          <TopCategoriesCard
            img={product.img}
            para={product.text}
            head={product.h1}
          ></TopCategoriesCard>
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
export default TopCategoriesSlider;
