import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import FlashDealCard from "./FlashDealCard";
import FlashDealCardData from "../CardsData/FlashDealData";
import { Swiper, SwiperSlide } from "swiper/react";
import Icon from "@mui/icons-material/BoltOutlined";
import { NavLink } from "react-router-dom";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import Btn from "../../../../../components/btn/btn";
import "swiper/css";
import "swiper/css/navigation";
import axios from "axios";
import logo from "../../../../../components/Footer/gillyLogo.png";
const FlashSlider = () => {
  SwiperCore.use([Autoplay, Pagination, Navigation]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          "http://localhost:5000/api/products?category=flashsale"
        );
        setProducts(res.data);
        setLoading(false);
        console.log("flashsale data ", res.data);
      } catch (err) {}
    };
    getProducts();
  }, []);
  console.log("new arrival products ", products);

  return (
    <>
      <div
        className="mx-4 border-0 "
        style={
          {
            // width: '95%',
          }
        }
      >
        <Card.Header className="border-0" style={{ backgroundColor: "white" }}>
          <div
            className="block pb-32 pt-8 px-8 bg-fixed rounded-lg "
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(https://as1.ftcdn.net/v2/jpg/03/10/98/24/1000_F_310982423_8X6aViesypKgcKBn94x3ojw6228teE5c.jpg)",
              position: "sticky",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <h2 className=" text-5xl font-semibold text-white italic font-mono">
              Flash Sale
            </h2>
          </div>
        </Card.Header>
        <Swiper
          pagination={{
            clickable: true,
            pagination: true,
          }}
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
              slidesPerView: 4,
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
          className="mySwiper relative -mt-20"
          style={{
            width: "95%",
          }}
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
                <SwiperSlide
                  style={{ backgroundColor: "" }}
                  className="rounded-3xl"
                >
                  <FlashDealCard data={data}></FlashDealCard>
                </SwiperSlide>
              ))}
            </div>
          )}
        </Swiper>
        <Card.Header
          className="border-0 text-right"
          style={{ backgroundColor: "white" }}
        >
          <Card.Link className="text-right" href="#">
            <Btn
              link="/moreProducts/flashsale"
              title="More"
              styles="bg-red-400 text-white"
            />
          </Card.Link>
        </Card.Header>
      </div>
    </>
  );
};
export default FlashSlider;
