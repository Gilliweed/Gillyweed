import React from "react";

import TrendCard from "./Recent.component";
const Recent = () => {
  return (
    <div className="grid grid-cols-3 gap-3 m-10 ml-20">
      <TrendCard />
      <TrendCard />
      <TrendCard />
      
    </div>
  );
};
export default Recent;
