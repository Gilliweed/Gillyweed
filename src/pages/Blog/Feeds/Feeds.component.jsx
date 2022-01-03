import React from "react";
import Data from "../BlogData/blogdata";

const FeedsC = (props) => {
  return (
    <div className="pt-4">
      <div className="max-w-3xl bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="/#">
          <img className="rounded-t-lg" src={Data[props.ind].img} alt="just" />
        </a>
        <div className="grid grid-cols-4 border-bottom p-4">
          <div className="col-end-0.5">
            <h4 className="text-2xl">25</h4>
            <h5 className="text-xl text-red-400">Dec</h5>
          </div>
          <div className="col-start-2 col-end-5">
            {console.log(props.ind)}
            <h3 className="text-xl text-blue-600">{Data[props.ind].topic}</h3>
            <div className="flex flex-row pt-2 pb-2 mt-2">
              <h4 className="text-gray-400">By Admin</h4>
              <h5 className="ml-14 text-gray-400">Fitness , Health</h5>
            </div>
          </div>
        </div>
        <div className="px-10 py-4">
          <p>{Data[props.ind].short}</p>
          <button className="pt-2 text-white border-2 bg-blue-700 rounded-full px-4 py-2 mt-3 hover:bg-red-400">
            <a href="/article">Read More</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedsC;
