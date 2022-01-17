import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "react-bootstrap";
import NewArrival from "./NewArrivalCard";
import NewArrivalData from "../CardsData/NewArrival";
// import './NewArrival.css';
import Icon from "@mui/icons-material/FlightLand";
import { NavLink } from "react-router-dom";
import Btn from "../../../../../components/btn/btn";
import axios from "axios";
import { useState, useEffect } from "react";
import logo from "../../../../../components/Footer/gillyLogo.png";

const NewArrivalSlider = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          "http://localhost:5000/api/products?category=newarrival"
        );
        setLoading(false);
        setProducts(res.data);
        console.log("bigdiscount data ", res.data);
      } catch (err) {}
    };
    getProducts();
  }, []);

  console.log("new arrival products ", products);
  return (
    <>
      <div
        className="mx-4 my-3 border-0 "
        style={
          {
            // width: '95%',
          }
        }
      >
        <Card.Header className="border-0" style={{ backgroundColor: "white" }}>
          <div className="flex ">
            <h2 className=" text-5xl">New Arrival</h2>
          </div>
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
                  <NewArrival data={data}></NewArrival>
                </SwiperSlide>
              ))}
            </div>
          )}
        </Swiper>
        <Card.Header
          className="border-0 text-right"
          style={{ backgroundColor: "white" }}
        >
          <Card.Link className="text-right">
            <Btn
              link="/moreProducts/newarrival"
              title="More"
              styles="bg-red-400 text-white"
            />
          </Card.Link>
        </Card.Header>
      </div>
    </>
  );
};
export default NewArrivalSlider;
