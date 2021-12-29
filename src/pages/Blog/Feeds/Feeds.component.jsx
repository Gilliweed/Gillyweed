import React from "react";

const FeedsC = () => {
  return (
    <div className="pt-4">
      <div className="max-w-3xl bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="/#">
          <img
            className="rounded-t-lg"
            src="https://flowbite.com/docs/images/blog/image-1.jpg"
            alt=""
          />
        </a>
        <div className="grid grid-cols-4 border-bottom p-4">
          <div className="col-end-0.5">
            <h4 className="text-2xl">25</h4>
            <h5 className="text-xl text-red-400">Dec</h5>
          </div>
          <div className="col-start-2 col-end-5">
            <h3 className="text-xl text-blue-600">
              <a href="/#">Climate Change is the Biggest Upcoming Threat</a>
            </h3>
            <div className="flex flex-row pt-2 pb-2 mt-2">
              <h4 className="text-gray-400">By Admin</h4>
              <h5 className="ml-14 text-gray-400">Fitness , Health</h5>
            </div>
          </div>
        </div>
        <div className="px-10 py-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <button className="pt-2 text-white border-2 bg-blue-700 rounded-full px-4 py-2 mt-3 hover:bg-red-400">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedsC;
