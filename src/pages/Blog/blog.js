import React from "react";
import { Grid } from "@material-ui/core";
import Trend from "./Entry/BlogHero/BlogHero";
import Recent from "./Recent/Recent";
import Feeds from "./Feeds/Feeds";
import PaginationC from "./Pagination/Pagination";
const Blog = () => {
  return (
    <div class="blog">
      <div class="Entry">
        <Grid item container spacing={2}>
          <Grid item lg={12} sm={9}>
            <Trend></Trend>
          </Grid>
        </Grid>
      </div>
      <div>
        <Recent />
      </div>
      <Feeds />
      <div className="p-3 ml-15">
        <PaginationC />
      </div>
    </div>
  );
};
export default Blog;
