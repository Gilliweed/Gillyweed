import React from 'react';
import Slider from 'react-slick';
import { Card, Row, Col, Button, Stack } from 'react-bootstrap';
import NewArrival from './NewArrivalCard';
import NewArrivalData from '../CardsData/NewArrival';
// import './NewArrival.css';
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

      <Row>
        <Col>
          <Stack
            gap={2}
            className="col-md mx-auto"
            style={{ marginTop: '24px' }}
          >
            <Button variant="outline-primary">
              Brand 1
            </Button>
            <Button variant="outline-primary">Brand 2</Button>
            <Button variant="outline-primary">Brand 3</Button>
            <Button variant="outline-primary">Brand 4</Button>
            <Button variant="outline-primary">Brand 5</Button>
          </Stack>
        </Col>
        <Col sm={9}>
          <Slider {...settings}>
            {NewArrivalData.products.map((product) => (
              <NewArrival
                img={product.img}
                para={product.text}
                head={product.h1}
              ></NewArrival>
            ))}
          </Slider>
        </Col>
      </Row>
      <Card.Header className="border-0 text-right">
        <Card.Link className="text-right" href="#">
          More
        </Card.Link>
      </Card.Header>
    </Card>
  );
};
export default NewArrivalSlider;
