import React from "react";
import Caro from "./Caro";
import CaroData from "./CaroData";
const Home = () => {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide" data-ride="true">
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={CaroData[0].img} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Our Great Ventures</h5>
              <p>Throught Out The India We are The Best.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={CaroData[1].img} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Themes</h5>
              <p>Our themes are one of the bests.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={CaroData[2].img} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Avaliability</h5>
              <p>We Have availability of every possible arragements.</p>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
};
export default Home;
