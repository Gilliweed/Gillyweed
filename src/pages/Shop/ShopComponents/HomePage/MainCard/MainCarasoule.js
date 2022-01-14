import  { useState,useEffect } from 'react';
import Slider from 'react-slick';
import { Card } from 'react-bootstrap';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css/effect-fade';
import MainCard from './MainCards';
import MainCardData from '../CardsData/MainCardData';
import "swiper/css";
import axios from 'axios';


const ItemSlider = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/maincar`);
        setProducts(res.data);
        console.log("bigdiscount data ", res.data);
      } catch (err) {}
    };
    getProducts();
  }, []);

  console.log("main cara products ", products);
  SwiperCore.use([Autoplay]);
  return (
    <Card className="container border-0 ">
      <Swiper
        style={{ width: '100%' }}
        // navigation={true}
        className="mySwiper "
        autoplay={{
          delay: 20000,
          disableOnInteraction: false,
        }}
        effect={"fade"}
      >
         {products.map((data) => (
          <SwiperSlide style={{ backgroundColor: "" }}>
            <MainCard
             data = {data}
            ></MainCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </Card>
  );
};

export default ItemSlider;
