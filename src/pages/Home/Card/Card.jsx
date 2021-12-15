import React from "react";
import CardT from "./Card.Component";
import "./Card.css";

const Card = () => {
  const getRndInteger=(min, max)=> {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  const colg= "col-"+getRndInteger(3,6)
  return (
    <div className="topics  row px-4 py-4">
    <div className="col-md-9 row">
    <div className="row align-content-end col-md-6 cardiv1 "><CardT text="Trending" img="https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1973&q=80" classname=""/></div>
      <div className="col-md-6 cardiv2"><CardT text="Shop" /></div>
      <div className=" col-md-6 cardiv3"><CardT text="Blog" /></div>
      <div className=" cardiv4"><CardT text="Innovation" /></div> 
    </div>
      
      <div className="col-3"><h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h3></div>
    </div>
  );
};
export default Card;
