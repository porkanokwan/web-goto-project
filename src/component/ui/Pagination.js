import React from "react";
import { Link } from "react-router-dom";

function Pagination() {
  return (
    <div className="w-100">
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <Link
              className="page-link border border-0 fs-48 me-15 shadow-none bg-transparent"
              to="#"
            >
              <span>&laquo;</span>
            </Link>
          </li>
          <li className="page-item">
            <Link
              className="page-link border border-0 fs-48 me-15 shadow-none bg-transparent"
              to="#"
            >
              1
            </Link>
          </li>
          <li className="page-item">
            <Link
              className="page-link border border-0 fs-48 me-15 shadow-none bg-transparent"
              to="#"
            >
              2
            </Link>
          </li>
          <li className="page-item">
            <Link
              className="page-link border border-0 fs-48 me-15 shadow-none bg-transparent"
              to="#"
            >
              3
            </Link>
          </li>
          <li className="page-item">
            <Link
              className="page-link border border-0 fs-48 me-15 shadow-none bg-transparent"
              to="#"
            >
              4
            </Link>
          </li>
          <li className="page-item">
            <Link
              className="page-link border border-0 fs-48 me-15 shadow-none bg-transparent"
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
