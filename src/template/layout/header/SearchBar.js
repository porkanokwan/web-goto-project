import { Location } from "../../icons";

function SearchBar() {
  return (
    <>
      <div className="d-flex flex-wrap bg-white rounded-pill justify-content-center align-items-center text-dark search">
        <div className="destination d-flex ">
          <Location opacity={50} />
          <label className="des-x fs-s pe-3 mt-1">Destinations</label>
          <div className="search-destination mt-8 d-flex">
            <i className="fa-solid fa-magnifying-glass ms-1 mt-search" />
            <select className="border border-0 mt-1 ms-1 text-secondary w-100 rounded-3">
              <option value="" disabled selected>
                Where are you going?
              </option>
            </select>
          </div>
        </div>

        <div className="category mb-2 d-flex">
          <label className="cate-x fs-s px-3 mt-1">Category</label>
          <div className="search-destination mt-8 d-flex">
            <i className="fa-solid fa-magnifying-glass ms-1 mt-search" />
            <select className="border border-0 mt-1 ms-1 text-secondary w-100 rounded-3">
              <option value="" disabled selected>
                Choose Category...
              </option>
            </select>
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
