import React from "react";
import Caro from "./Carousel/Caro";
import Card from "./Card/Card";
import Products from "./OurProducts/products";
const Home = () => {
  return (
     <>
      <Caro />
      <Card />
      <div className="container" style={{backgroundColor:"red"}}>
      <Products/>
      </div>

    </>
  );
};
export default Home;
