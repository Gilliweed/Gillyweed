import React from "react";
import Cate from "./Entry/Categories/Categories";
import { Grid } from "@material-ui/core";
import "./blog.css";
import Trend from "./Entry/Carousel/Carousel.Shop";
const Blog = () => {
  return (
    <div class="blog">
      <Grid item container spacing={2}>
        <Grid item lg={9}>
          <Trend></Trend>
        </Grid>
        <Grid item lg={3}>
          <Cate />
        </Grid>
      </Grid>
    </div>
  );
};
export default Blog;
