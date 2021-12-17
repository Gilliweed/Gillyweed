import React from "react";
import { Pagination } from "react-bootstrap";
import "./Pagination.css";
import PageC from "./Pagination.component";

const Page = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <nav aria-label="Page navigation example" className="page-adjust">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="/#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        {arr.map((val, idx) => {
          return <PageC num={val} />;
        })}
        <li class="page-item">
          <a class="page-link" href="/#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Page;
