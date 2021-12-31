import React from "react";

const AboutC = () => {
  return (
    <div className="p-2">
      <div className="grid grid-cols-6 p-6">
        <div className="col-end-3 text-4xl text-blue-800 decoration-4 font-bold ">
          <h2>Personal care for your healthy living</h2>
        </div>
        <div className="col-start-3 col-end-6 text-xl text-gray-500 mt-2 ml-3">
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt,
            quod laborum alias. Vitae dolorum, officia sit! Saepe ullam facere
            at, consequatur incidunt, quae esse, quis ut reprehenderit
            dignissimos, libero delectus.
          </h4>
        </div>
      </div>
      <div className="grid grid-cols-10 p-6 mt-10 ml-28">
        <div className="col-start-2 col-span-2 ">
          <img
            className="w-60"
            src="https://demo.themefisher.com/novena/images/about/about-1.jpg"
            alt="just"
          />
          <h2 className="text-black-600 text-xl pt-2 pb-2 font-bold">
            {" "}
            Our Coustomer Faciclity
          </h2>
          <p className="text-gray-500">
            Voluptate aperiam esse possimus maxime repellendus, nihil quod
            accusantium .
          </p>
        </div>
        <div className="col-span-2">
          <img
            className="w-60"
            src="https://demo.themefisher.com/novena/images/about/about-1.jpg"
            alt="just"
          />
          <h2 className="text-black-600 text-xl pt-2 pb-2 font-bold ">
            {" "}
            Our Coustomer Faciclity
          </h2>
          <p className="text-gray-500">
            Voluptate aperiam esse possimus maxime repellendus, nihil quod
            accusantium .
          </p>
        </div>
        <div className=" col-span-2">
          <img
            className="w-60"
            src="https://demo.themefisher.com/novena/images/about/about-1.jpg"
            alt="just"
          />
          <h2 className="text-black-600 text-xl pt-2 pb-2 font-bold">
            {" "}
            Our Coustomer Faciclity
          </h2>
          <p className="text-gray-500">
            Voluptate aperiam esse possimus maxime repellendus, nihil quod
            accusantium .
          </p>
        </div>
        <div className="col-span-2">
          <img
            className="w-60"
            src="https://demo.themefisher.com/novena/images/about/about-1.jpg"
            alt="just"
          />
          <h2 className="text-black-600 text-xl pt-2 pb-2 font-bold">
            {" "}
            Our Coustomer Faciclity
          </h2>
          <p className="text-gray-500">
            Voluptate aperiam esse possimus maxime repellendus, nihil quod
            accusantium .
          </p>
        </div>
      </div>
      <div className="p-6">
        <h1 className="text-4xl text-blue-800 font-medium text-center">
          Meet Our Team
        </h1>
        <p className="text-center text-gray-500 p-4">
          Today’s users expect effortless experiences. Don’t let essential
          people and processes stay stuck in the past. Speed it up, skip the
          hassles
        </p>
      </div>
    </div>
  );
};

export default AboutC;
