import React from "react";
import Slider from "react-slick";
import { Card, Row, Col, Button } from "react-bootstrap";
import FlashDealCard from "./FlashDealCard";
import FlashDealCardData from "../CardsData/FlashDealData";
import './FlashDeal.css';
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
          <h1 className ="headi" ><Icon style={{fontSize:"46px",marginLeft:"-7px"}} />Flash Deal</h1>
        </Col>
        {/* <Col className ="heading" >
         
           <Button  variant="outline-success" className ="headi , but">more</Button>
          
        </Col> */}
      </Row>
      {/* <h2> Single Item</h2> */}
      <Slider {...settings} >
        <div className="itemcard" style={{ backgroundColor: "white", marginLeft: "6px" }}>
          <FlashDealCard img={FlashDealCardData[0].img} para={FlashDealCardData[0].text} head={FlashDealCardData[0].h1} />
        </div>
        <div className="itemcard">
          <FlashDealCard img={FlashDealCardData[4].img} para={FlashDealCardData[4].text} head={FlashDealCardData[4].h1} />

        </div>
        <div className="itemcard">
          <FlashDealCard img={FlashDealCardData[2].img} para={FlashDealCardData[2].text} head={FlashDealCardData[2].h1} />

        </div>
        <div className="itemcard">
          <FlashDealCard img={FlashDealCardData[3].img} para={FlashDealCardData[3].text} head={FlashDealCardData[3].h1} />
        </div>
        <div className="itemcard" style={{ backgroundColor: "white", marginLeft: "6px" }}>
          <FlashDealCard img={FlashDealCardData[0].img} para={FlashDealCardData[0].text} head={FlashDealCardData[0].h1} />
        </div>
        <div className="itemcard">
          <FlashDealCard img={FlashDealCardData[4].img} para={FlashDealCardData[4].text} head={FlashDealCardData[4].h1} />

        </div>
        <div className="itemcard">
          <FlashDealCard img={FlashDealCardData[2].img} para={FlashDealCardData[2].text} head={FlashDealCardData[2].h1} />

        </div>
        <div className="itemcard">
          <FlashDealCard img={FlashDealCardData[3].img} para={FlashDealCardData[3].text} head={FlashDealCardData[3].h1} />
        </div>
        <div className="itemcard" style={{ backgroundColor: "white", marginLeft: "6px" }}>
          <FlashDealCard img={FlashDealCardData[0].img} para={FlashDealCardData[0].text} head={FlashDealCardData[0].h1} />
        </div>
        <div className="itemcard">
          <FlashDealCard img={FlashDealCardData[4].img} para={FlashDealCardData[4].text} head={FlashDealCardData[4].h1} />

        </div>
        <div className="itemcard">
          <FlashDealCard img={FlashDealCardData[2].img} para={FlashDealCardData[2].text} head={FlashDealCardData[2].h1} />

        </div>
        <div className="itemcard">
          <FlashDealCard img={FlashDealCardData[3].img} para={FlashDealCardData[3].text} head={FlashDealCardData[3].h1} />
        </div>

      </Slider>
    </Card>
  );
}
export default FlashSlider;