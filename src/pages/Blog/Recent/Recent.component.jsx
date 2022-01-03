import React from "react";
import { NavLink } from "react-router-dom";
import Btn from "../../../components/btn/btn";

const TrendCard = (props) => {
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="/#">
        <img className="rounded-t-lg h-64 w-96" src={props.img} alt="" />
      </a>
      <div className="p-5">
        <a href="/#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
            {props.topic}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {props.short}
        </p>
        <Btn link="/article" title="Read More" styles="bg-cyan-500 text-white" />
        {/* <a
          href="/article"
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-green-600  dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a> */}
      </div>
    </div>
  );
};
export default TrendCard;
