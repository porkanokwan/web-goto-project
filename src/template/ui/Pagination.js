import React from "react";
import { Link } from "react-router-dom";

function Pagination() {
  return (
    <div className="w-100">
      <nav>
        <ul class="pagination">
          <li class="page-item">
            <Link
              class="page-link border border-0 fs-48 me-5 shadow-none bg-transparent"
              to="#"
            >
              <span>&laquo;</span>
            </Link>
          </li>
          <li class="page-item">
            <Link
              class="page-link border border-0 fs-48 me-5 shadow-none bg-transparent"
              to="#"
            >
              1
            </Link>
          </li>
          <li class="page-item">
            <Link
              class="page-link border border-0 fs-48 me-5 shadow-none bg-transparent"
              to="#"
            >
              2
            </Link>
          </li>
          <li class="page-item">
            <Link
              class="page-link border border-0 fs-48 me-5 shadow-none bg-transparent"
              to="#"
            >
              3
            </Link>
          </li>
          <li class="page-item">
            <Link
              class="page-link border border-0 fs-48 me-5 shadow-none bg-transparent"
              to="#"
            >
              4
            </Link>
          </li>
          <li class="page-item">
            <Link
              class="page-link border border-0 fs-48 me-5 shadow-none bg-transparent"
              to="#"
            >
              <span>&raquo;</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
