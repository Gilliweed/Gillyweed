import React from "react";
import Slider from "react-slick";
import { Card } from "react-bootstrap";
import "./Carasoule.css";
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
        <Card className="container border-0" style= {{boxShadow: "5px 5px 5px grey"}}>
          
            <Slider {...settings} >
                <div  className ="itemcard" style={{ backgroundColor: "white" }}>
                    <MainCard img={MainCardData[0].img} para={ MainCardData[0].text } head={MainCardData[0].h1 } />
                </div>
                <div  className ="itemcard">
                    <MainCard img={MainCardData[4].img} para={MainCardData[4].text } head={MainCardData[4].h1  } />

                </div>
                <div  className ="itemcard">
                    <MainCard img={MainCardData[2].img} para={ MainCardData[2].text } head={MainCardData[2].h1  } />

                </div>
                <div  className ="itemcard">
                    <MainCard img={MainCardData[3].img} para={ MainCardData[3].text}  head={MainCardData[3].h1  }/>
                </div>

            </Slider>
        </Card>
    );
}

export default ItemSlider;