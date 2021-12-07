import React from "react";
import CardT from "./Card.Component";
import "./Card.css";

const Card = () => {
  return (
    <div className="topics">
      <CardT text="Trending" />
      <CardT text="Shop" />
      <CardT text="Blog" />
      <CardT text="Innovation" />
    </div>
  );
};
export default Card;
