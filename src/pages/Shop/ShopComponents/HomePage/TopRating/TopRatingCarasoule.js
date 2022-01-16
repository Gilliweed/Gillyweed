import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Card } from "react-bootstrap";
import TopRatingCard from "./TopRatingCard";
import TopRatingData from "../CardsData/TopRating";
import Btn from "../../../../../components/btn/btn";
import axios from 'axios';


const TopRatingSlider = () => {
  SwiperCore.use([Autoplay, Pagination, Navigation]);
  const [products, setProducts] = useState([]);
  
    useEffect(() => {
      const getProducts = async () => {
        try {
          const res = await axios.get("http://localhost:5000/api/products?category=toprated");
          setProducts(res.data);
          console.log("bigdiscount data ", res.data);
        } catch (err) {}
      };
      getProducts();
    }, []);
    console.log("bigdiscount data ", products);
  return (
    <>
      <div className="mx-10 border-0 " style={{}}>
        <Card.Header className="border-0" style={{ backgroundColor: "white" }}>
          <div className="flex ">
            <h2 className=" text-5xl pl-4 py-4">Top Rated</h2>
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
              slidesPerView: 4,
              spaceBetween: 20,
            },
            "@2.00": {
              slidesPerView: 5,
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
              <TopRatingCard
                data= {data}
              ></TopRatingCard>
            </SwiperSlide>
          ))}
        </Swiper>
        <Card.Header
          className="border-0 text-right"
          style={{ backgroundColor: "white" }}
        >
          <Card.Link className="text-right" href="#">
            <Btn
              link="/moreProducts/toprated"
              title="More"
              styles="bg-red-400 text-white"
            />
          </Card.Link>
        </Card.Header>
      </div>
    </>
  );
};
export default TopRatingSlider;
