import React from "react";

import data from "./RecentData";
import TrendCard from "./Recent.component";
const Recent = () => {
  return (
    <div className="grid grid-cols-3 gap-3 m-10 ml-20">
      <TrendCard
        img={data[0].img}
        topic={data[0].topic}
        short={data[0].short}
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
