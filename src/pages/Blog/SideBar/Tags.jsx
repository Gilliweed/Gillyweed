import React from "react";

const data = ["climate", "Govt.", "development", "Health", "NGOs"];
const Tags = () => {
  return (
    <div>
      <h4 className="text-2xl mb-3">Tags</h4>
      <div>
        {data.map((ele) => {
          return (
            <button className=" border-1 border-gray-200 px-2 py-1 rounded-full hover:bg-red-400 hover:shadow-md float-left mr-2 mb-3 text-gray-600 hover:text-white">
              {ele}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Tags;
