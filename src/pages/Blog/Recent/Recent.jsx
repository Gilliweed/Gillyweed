import React from "react";

import TrendCard from "./Recent.component";
import "./Recent.scss";
const Recent = () => {
  return (
    <div className="Main-Card">
      <div className="container">
        <div className="row"></div>
        <TrendCard />
        <TrendCard />
        <TrendCard />
      </div>
    </div>
  );
};
export default Recent;
