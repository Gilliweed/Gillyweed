import React from "react";
import { Carousel } from "react-bootstrap";
import CaroData from "./CaroData";
const Caro = () => {
  return (
    <>
      <Carousel >
        {
          CaroData.map((val, index) => {
            return (
              <Carousel.Item interval={3000} pause='hover' touch={true}>
                <img
                  className="  w-100 mh-11 "
                  src={val.img}
                  alt="image1"
                />
                <Carousel.Caption>
                  <h3>{val.title}</h3>
                  <p>{val.text}</p>
                </Carousel.Caption>
              </Carousel.Item>
            )

          })
        }

      </Carousel>

    </>
  );
}
export default Caro;