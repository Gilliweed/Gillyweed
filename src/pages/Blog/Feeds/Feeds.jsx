import React from "react";
import FeedC from "./Feeds.component";
import CategoriesS from "../SideBar/Categories.SideBar";
import SearchBar from "../SideBar/SearchBar";
import RecentNews from "../SideBar/RecentNews";
import Tags from "../SideBar/Tags";
const Feeds = () => {
  return (
    <div className="grid grid-cols-6 gap-4 p-10">
      <div className="col-start-1 col-end-5">
        <FeedC ind="0" />
        <FeedC ind="1" />
        <FeedC ind="2" />
        <FeedC ind="3" />
        <FeedC ind="4" />
        <FeedC ind="1" />
      </div>
      <div className="col-start-5 col-end-7 ">
        <div className="grid grid-rows-2 gap-4">
          <div className="row-span-1 p-10 shadow-md max-h-max ">
            <SearchBar className="mx-auto" />
            <CategoriesS />
            <RecentNews />
            <Tags />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Feeds;
