import React from "react";

const data = ["Climate", "Disaster", "Government", "Climate", "Disaster"];
const CategoriesS = () => {
  return (
    <div>
      <div className="grid gird-rows-5">
        <h4 className="text-2xl py-3">Categories</h4>
        <ul className="pl-0 mb-0">
          {data.map((item) => {
            return (
              <li className="border-bottom">
                <a href="/#" className="d-block text-gray-400 py-2.5 font-sans font-medium ">
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CategoriesS;
