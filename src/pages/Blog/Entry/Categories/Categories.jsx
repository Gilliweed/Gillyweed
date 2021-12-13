import React from "react";

import Topic from "./Catergories.component";

const Cate = () => {
  return (
    <div class="mt-3 mr-5">
      <div classNameN="col-4 ">
        <div className="list-group" id="list-tab" role="tablist">
          <a
            className="list-group-item list-group-item-action active"
            id="list-home-list"
            data-toggle="list"
            href="#list-home"
            role="tab"
            aria-controls="home"
          >
            Home
          </a>
          <Topic text="Trending" />
          <Topic text="Actions" />
          <Topic text="Temperature" />
          <Topic text="Climate Change" />
          <Topic text="Natural" />
          <Topic text="Carbon" />
          <Topic text="Disaster" />
        </div>
      </div>
    </div>
  );
};
export default Cate;
