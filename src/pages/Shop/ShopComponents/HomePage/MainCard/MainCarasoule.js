import { useState, useEffect } from "react";
import Slider from "react-slick";
import { Card } from "react-bootstrap";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css/effect-fade";
import MainCard from "./MainCards";
import MainCardData from "../CardsData/MainCardData";
import "swiper/css";
import axios from "axios";
import logo from "../../../../../components/Footer/gillyLogo.png";

const ItemSlider = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`http://localhost:5000/api/maincar`);
        setProducts(res.data);
        setLoading(false);
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
        style={{ width: "100%" }}
        // navigation={true}
        className="mySwiper "
        autoplay={{
          delay: 20000,
          disableOnInteraction: false,
        }}
        effect={"fade"}
      >
        {loading ? (
          <div className="flex justify-center m-5 mt-16">
          <div to="/" className="animate-bounce">
            <img src={logo} className="mx-auto w-14" alt="logo" />
          </div>
          <div className="mt-10 -ml-12 pt-4 pr-4">Loading ...</div>
        </div>
        ) : (
          <div>
            {products.map((data) => (
              <SwiperSlide style={{ backgroundColor: "" }}>
                <MainCard data={data}></MainCard>
              </SwiperSlide>
            ))}
          </div>
        )}
      </Swiper>
    </Card>
  );
};

export default ItemSlider;
