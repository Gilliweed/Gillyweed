import React from "react";
import Slider from "react-slick";
import { Card, Row, Col, Button } from "react-bootstrap";
import TopRatingCard from "./TopRatingCard";
import TopRatingData from "../CardsData/TopRating";
// import './TopRating.css';

import Icon from '@mui/icons-material/StarBorderPurple500';
const TopRatingSlider = () => {
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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <Card
      className="container "
      border="success"
      style={{ backgroundColor: 'rgb(196 224 191 / 38%)' }}
    >
      <Card.Header className="border-0">
        <h2>
          <Icon style={{ fontSize: '35px' }} /> Top Rated
        </h2>
      </Card.Header>
     
      <Slider {...settings} >
      {TopRatingData.products.map((product) => 
                  <TopRatingCard img={product.img} para={product.text} head={product.h1}></TopRatingCard>
          )}
        

      </Slider>
      <Card.Header className="border-0 text-right">
        <Card.Link className="text-right" href="#">
          More
        </Card.Link>
      </Card.Header>
    </Card>
  );
}
export default TopRatingSlider;