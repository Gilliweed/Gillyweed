import React from "react";

import "./Feeds.css";
const FeedC = (props) => {
  return (
    <div class="row mb-2">
      <div class="col-md-12">
        <div class="card flex-md-row mb-4 box-shadow h-md-250">
          <div class="card-body d-flex flex-column align-items-start">
            <strong class="d-inline-block mb-2 text-primary">World</strong>
            <h3 class="mb-0">
              <a class="text-dark" href="/#">
                Featured post
              </a>
            </h3>
            <div class="mb-1 text-muted">Nov 12</div>
            <p class="card-text mb-auto">
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </p>
            <a href="/#">Continue reading</a>
          </div>
          <img
            class="card-img-right flex-auto d-none d-md-block img-size"
            src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821__340.jpg"
            alt="Card cap"
          />
        </div>
      </div>
      <div class="col-md-12">
        <div class="card flex-md-row mb-4 box-shadow h-md-250">
          <div class="card-body d-flex flex-column align-items-start">
            <strong class="d-inline-block mb-2 text-success">Design</strong>
            <h3 class="mb-0">
              <a class="text-dark" href="/#">
                Post title
              </a>
            </h3>
            <div class="mb-1 text-muted">Nov 11</div>
            <p class="card-text mb-auto">
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </p>
            <a href="/#">Continue reading</a>
          </div>
          <img
            class="card-img-right flex-auto d-none d-md-block img-size"
            src="https://i.pinimg.com/originals/a7/3d/6e/a73d6e4ac85c6a822841e449b24c78e1.jpg"
            alt="Card cap"
          />
        </div>
      </div>
    </div>
  );
};
export default FeedC;
