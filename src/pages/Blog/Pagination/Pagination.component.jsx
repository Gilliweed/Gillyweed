import React from "react";

const PageC = (props) => {
  return (
    <li class="page-item">
      <a class="page-link" href="/#">
        {props.num}
      </a>
    </li>
  );
};
export default PageC;
