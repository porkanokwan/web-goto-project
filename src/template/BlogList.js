import { Link } from "react-router-dom";
import BlogItem from "./BlogItem";
import SelectCategory from "./layout/header/SelectCategory";
import SelectDestination from "./layout/header/SelectDestination";

function BlogList() {
  return (
    <div className="p-5">
      <div className="d-flex justify-content-start">
        <div className="mt-8 text-secondary me-3 search-destination">
          <SelectDestination />
        </div>

        <div className="mt-8 text-secondary search-destination">
          <SelectCategory />
        </div>
      </div>

      <div className="d-flex flex-column mt-5 me-5">
        <div className="d-flex justify-content-end text-primary wd-450">
          <Link to="/blog/edit" className="mt-minus-5">
            <i className="fa-solid fa-pencil me-1" />
          </Link>
          <i className="fa-solid fa-trash" role="button" />
        </div>
        <BlogItem size="ms-0 wb-50" direction="fd-column" line="ms-0 w-hr" />

        <div className="d-flex justify-content-end text-primary wd-450">
          <i className="fa-solid fa-pencil me-1" />
          <i className="fa-solid fa-trash" />
        </div>
        <BlogItem size="ms-0 wb-50" direction="fd-column" line="ms-0 w-hr" />
      </div>
    </div>
  );
}

export default BlogList;
