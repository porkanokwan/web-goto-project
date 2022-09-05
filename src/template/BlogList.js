import { Link } from "react-router-dom";
import BlogItem from "./BlogItem";
import SelectCategory from "./layout/header/SelectCategory";
import SelectDestination from "./layout/header/SelectDestination";

function BlogList() {
  return (
    <div className="pt-5 wb-600">
      <div className="d-flex justify-content-start">
        <div className="mt-8 text-secondary me-3 search-destination">
          <SelectDestination />
        </div>

        <div className="mt-8 text-secondary search-destination">
          <SelectCategory />
        </div>
      </div>

      <div className="d-flex flex-column mt-5 me-5 w-100">
        <div className="d-flex ms-edit text-primary">
          <Link to="/blog/edit" className="mt-minus-5">
            <i className="fa-solid fa-pencil me-1" />
          </Link>
          <i className="fa-solid fa-trash" role="button" />
        </div>
        <BlogItem
          size="ms-0 wb-50"
          direction="fd-column"
          line="w-blog"
          picSize="card-img-bl"
        />

        <div className="d-flex ms-edit text-primary">
          <i className="fa-solid fa-pencil me-1" />
          <i className="fa-solid fa-trash" />
        </div>
        <BlogItem
          size="ms-0 wb-50"
          direction="fd-column"
          line="w-blog"
          picSize="card-img-bl"
        />
      </div>
    </div>
  );
}

export default BlogList;
