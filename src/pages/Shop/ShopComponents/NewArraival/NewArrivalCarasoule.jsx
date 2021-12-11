import React from "react";
import Slider from "react-slick";
import { Card, Row, Col, Button, Stack } from "react-bootstrap";
import TopRatingCard from "./NewArrivalCard";
import FlashDealCardData from "../CardsData/FlashDealData";
import './NewArrival.css';
import Icon from '@mui/icons-material/FlightLand';
const NewArrivalSlider = () => {
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
        <Col className="headi" >
          <h1 className="headi" ><Icon style={{ fontSize: "40px", marginLeft: "-7px",color:"green" }} />New Arrival</h1>
        </Col>

      </Row>
      <Row>
      <Col>
          <Stack gap={2} className="col-md mx-auto" style = {{marginTop:"24px"}}>
            <Button variant="secondary">Brand 1</Button>
            <Button variant="secondary">Brand 2</Button>
            <Button variant="secondary">Brand 3</Button>
            <Button variant="secondary">Brand 4</Button>
            <Button variant="secondary">Brand 5</Button>
          </Stack>
        </Col>
        <Col sm ={9}>
          <Slider {...settings} >
            <div className="itemcard" style={{ backgroundColor: "white", marginLeft: "6px" }}>
              <TopRatingCard img={FlashDealCardData[0].img} para={FlashDealCardData[0].text} head={FlashDealCardData[0].h1} />
            </div>
            <div className="itemcard">
              <TopRatingCard img={FlashDealCardData[4].img} para={FlashDealCardData[4].text} head={FlashDealCardData[4].h1} />

            </div>
            <div className="itemcard">
              <TopRatingCard img={FlashDealCardData[2].img} para={FlashDealCardData[2].text} head={FlashDealCardData[2].h1} />

            </div>
            <div className="itemcard">
              <TopRatingCard img={FlashDealCardData[3].img} para={FlashDealCardData[3].text} head={FlashDealCardData[3].h1} />
            </div>
            <div className="itemcard" style={{ backgroundColor: "white", marginLeft: "6px" }}>
              <TopRatingCard img={FlashDealCardData[0].img} para={FlashDealCardData[0].text} head={FlashDealCardData[0].h1} />
            </div>
            <div className="itemcard">
              <TopRatingCard img={FlashDealCardData[4].img} para={FlashDealCardData[4].text} head={FlashDealCardData[4].h1} />

            </div>
            <div className="itemcard">
              <TopRatingCard img={FlashDealCardData[2].img} para={FlashDealCardData[2].text} head={FlashDealCardData[2].h1} />

            </div>
            <div className="itemcard">
              <TopRatingCard img={FlashDealCardData[3].img} para={FlashDealCardData[3].text} head={FlashDealCardData[3].h1} />
            </div>

            <div className="itemcard" style={{ backgroundColor: "white", marginLeft: "6px" }}>
              <TopRatingCard img={FlashDealCardData[0].img} para={FlashDealCardData[0].text} head={FlashDealCardData[0].h1} />
            </div>
            <div className="itemcard">
              <TopRatingCard img={FlashDealCardData[4].img} para={FlashDealCardData[4].text} head={FlashDealCardData[4].h1} />

            </div>
            <div className="itemcard">
              <TopRatingCard img={FlashDealCardData[2].img} para={FlashDealCardData[2].text} head={FlashDealCardData[2].h1} />

            </div>
            <div className="itemcard">
              <TopRatingCard img={FlashDealCardData[3].img} para={FlashDealCardData[3].text} head={FlashDealCardData[3].h1} />
            </div>


          </Slider>
        </Col>
        
      </Row>
    </Card>
  );
}
export default NewArrivalSlider;