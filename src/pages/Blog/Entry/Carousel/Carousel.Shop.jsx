import React from "react";
import { Carousel } from "react-bootstrap";
import "./Carousel.css";

import CaroData from "../../../Home/Carousel/CaroData";
const Trend = () => {
  return (
    <div className="trend">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(21).jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default Trend;
