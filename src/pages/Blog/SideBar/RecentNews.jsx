import React from "react";

const RecentNews = () => {
  const data = [1, 2, 3];
  return (
    <div>
      <h4 className="mb-3 text-2xl mt-4">Recent News</h4>
      {data.map((ele) => {
        return (
          <div className="flex flex-row border-bottom mb-3">
            <div className="mb-3 ">
              <a href="/#">
                <img
                  className="rounded"
                  src="https://demo.themefisher.com/biztrox/images/blog/post-thumb-sm-01.jpg"
                  alt="Just"
                />
              </a>
            </div>
            <div className="ml-3">
              <h6 className=" font-sans text-black-200">
                <a href="/#">Modi Action on Trees 2017-2020</a>
              </h6>
              <p className="mt-1 text-gray-400">28 Dec , 2021</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecentNews;
