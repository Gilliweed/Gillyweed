import { Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import FlashDealCard from "./FeaturedBrandCard";
import FeaturedBrandData from "../CardsData/FeaturedBrandData";
import Icon from "@mui/icons-material/BrandingWatermark";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import Btn from "../../../../../components/btn/btn";
import axios from "axios";
const FeaturedBrandSlider = () => {
  SwiperCore.use([Autoplay, Navigation]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/products?category=featuredproducts"
        );
        setProducts(res.data);
        console.log("flashsale data ", res.data);
      } catch (err) {}
    };
    getProducts();
  }, []);

  console.log("new featured products ", products);
  return (
    <Card
      className="border-0 mx-4"
      // border="success"
      // style={{ backgroundColor: 'rgb(196 224 191 / 38%)' }}
    >
      <Card.Header className="border-0" style={{ backgroundColor: "white" }}>
        <div className="flex my-4">
          <h2 className=" text-5xl mx-auto">Featured Products</h2>
        </div>
      </Card.Header>
      <Swiper
        navigation={true}
        breakpoints={{
          "@0.00": {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          "@1.50": {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          "@2.00": {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        className="mySwiper"
        style={{
          width: "95%",
        }}
      >
         {products.map((data) => (
          <SwiperSlide style={{ backgroundColor: "" }}>
            <FlashDealCard
              data = {data}
            ></FlashDealCard>
          </SwiperSlide>
        ))}
      </Swiper>
      <Card.Header
        className="border-0 text-right"
        style={{ backgroundColor: "white" }}
      >
        <Card.Link className="text-right" href="#">
          <Btn
            link="/moreProducts/featuredproducts"
            title="More"
            styles="bg-red-400 text-white"
          />
        </Card.Link>
      </Card.Header>
    </Card>
  );
};
export default FeaturedBrandSlider;
