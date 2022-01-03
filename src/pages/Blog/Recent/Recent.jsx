import React from "react";

import data from "../BlogData/blogdata";
import TrendCard from "./Recent.component";
const Recent = () => {
  return (
    <div className="grid grid-cols-3 gap-3 m-10 ml-20">
      <TrendCard
        img={data[4].img}
        topic={data[4].topic}
        short={data[4].short}
      />
      <TrendCard
        img={data[1].img}
        topic={data[1].topic}
        short={data[1].short}
      />
      <TrendCard
        img={data[2].img}
        topic={data[2].topic}
        short={data[2].short}
        
      />
    </div>
  );
};
export default Recent;
