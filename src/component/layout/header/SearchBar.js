import { Location } from "../../../icons";
import SelectCategory from "./SelectCategory";
import SelectDestination from "./SelectDestination";

function SearchBar() {
  return (
    <>
      <div className="d-flex flex-wrap bg-white rounded-pill justify-content-center align-items-center text-dark search">
        <div className="d-flex">
          <Location opacity={50} />
          <label className="des-x fs-s pe-3 mt-1">Destinations</label>
          <div className="search-destination mt-8 d-flex">
            <SelectDestination />
          </div>
        </div>

        <div className="category mb-2 d-flex">
          <label className="cate-x fs-s px-3 mt-1">Category</label>
          <div className="search-destination mt-8 d-flex">
            {/* <i className="fa-solid fa-magnifying-glass ms-1 mt-search" /> */}
            <SelectCategory />
          </div>
        </div>

        <div>
          <button className="btn-search" type="button">
            Search
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
