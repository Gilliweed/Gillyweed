import React from "react";
import Slider from "react-slick";
import { Card, Row, Col} from "react-bootstrap";
import TopRatingCard from "./MoreForYouCard";
import MoreForYouData from "../CardsData/MoreForYouData";
// import './MoreForYou.css';
import Icon from '@mui/icons-material/BoltOutlined';
const MoreForYouSlider = () => {
  const settings = {
    className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      speed: 500,
      rows: 1,
      slidesPerRow: 1,
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
    <Card className="container border-0" style = {{backgroundColor:"rgb(167, 170, 170)"}}>
      <Row>
        <Col className ="headi" >
          <h1 className ="headi" ><Icon style={{fontSize:"46px",marginLeft:"-7px"}} />More For You</h1>
        </Col>
       
      </Row>
     
      <Slider {...settings} >
          {MoreForYouData.products.map((product) => 
              <TopRatingCard img={product.img} para={product.text} head={product.h1}></TopRatingCard>
          )}
      </Slider>
    </Card>
  );
}
export default MoreForYouSlider;