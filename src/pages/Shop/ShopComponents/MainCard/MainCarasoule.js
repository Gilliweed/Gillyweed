import React from "react";
import Slider from "react-slick";
import { Card } from "react-bootstrap";
// import "./Carasoule.css";
import MainCard from "./MainCards";
import MainCardData from "../CardsData/MainCardData";
const ItemSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
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
        <Card className="container " style= {{boxShadow: "5px 5px 5px grey"}}>
          
            <Slider {...settings} >
                 {MainCardData.map((product) =>
                    <MainCard img={product.img} para={ product.text } head={product.h1 } />
                 )}  
            </Slider>
        </Card>
    );
}

export default ItemSlider;