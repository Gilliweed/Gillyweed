import { Card, Row, Col } from "react-bootstrap";
import TopRatingCard from "./MoreForYouCard";
import MoreForYouData from "../CardsData/MoreForYouData";
// import './MoreForYou.css';
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink } from "react-router-dom";

import Icon from "@mui/icons-material/BoltOutlined";

const MoreForYouSlider = () => {
  return (
    <Card
      className="border-0"
      // border="success"
      style={{
        display: "flex",
        justifyContent: "flexCenter",
        // alignItems: 'center',
      }}
    >
      <Card.Header className="border-0" style={{ backgroundColor: "white" }}>
        <h2>
          <Icon style={{ fontSize: "35px" }} />
          More for you
        </h2>
      </Card.Header>

      <Swiper
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          "@1.50": {
            slidesPerView: 5,
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
        {MoreForYouData.products.map((product) => (
          <SwiperSlide style={{ backgroundColor: "" }}>
            <TopRatingCard
              img={product.img}
              para={product.text}
              head={product.h1}
            ></TopRatingCard>
          </SwiperSlide>
        ))}
      </Swiper>
      <Card.Header
        className="border-0 text-right"
        style={{ backgroundColor: "white" }}
      >
        <Card.Link className="text-right" href="#">
          <NavLink
            to="/moreProducts/moreforyou"
            exact
            style={{ color: "black" }}
            title="More"
          >
            More
          </NavLink>
        </Card.Link>
      </Card.Header>
    </Card>
  );
};
export default MoreForYouSlider;
