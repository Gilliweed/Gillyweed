import React from "react";
import Cate from "./Entry/Categories/Categories";
import { Grid } from "@material-ui/core";
import "./blog.css";
import Trend from "./Entry/Carousel/Carousel.Shop";
import Recent from "./Recent/Recent";
import Feeds from "./Feeds/Feeds";
import Page from "./Pagination/Pagination";
const Blog = () => {
  return (
    <div class="blog">
      <div class="Entry">
        
        <Grid item container spacing={2}>
          <Grid item lg={9} sm={9}>
            <Trend></Trend>
          </Grid>
          <Grid item lg={3} sm={3}>
            <Cate />
          </Grid>
        </Grid>
      </div>
      <div class="Main-headline">
        <Recent />
      </div>
      <div class="Feeds">
        <h1 class="Feed-headline">Todays Feeds</h1>
        <Feeds />
      </div>
      <div>
        <Page />
      </div>
    </div>
  );
};
export default Blog;
