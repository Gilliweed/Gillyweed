import React from "react";
import Art from "./article.component";
import CategoriesS from "../SideBar/Categories.SideBar";
import SearchBar from "../SideBar/SearchBar";
import RecentNews from "../SideBar/RecentNews";
import Blog from "../../Home/components/BlogHome";
import Tags from "../SideBar/Tags";
const Article = (props) => {
  return (
    <>
      <div className="h-full">
        <div className="grid grid-cols-6 gap-4 p-10">
          <div className="col-start-1 col-end-5">
            <Art />
          </div>
          <div className="col-start-5 col-end-7 ">
            <div className="grid grid-rows-3 gap-4">
              <div className="row-span-2 p-10 shadow-md max-h-max ">
                <SearchBar className="mx-auto" />
                <CategoriesS />
                <RecentNews />
                <Tags />
              </div>
            </div>
          </div>
        </div>
        <Blog/>
      </div>
    </>
  );
};

export default Article;
