import { Location } from "../../icons";

function SearchBar() {
  return (
    <div className="d-flex flex-grow-1 flex-nowrap justify-content-center position-relative bottom-100">
      <div className="d-flex flex-nowrap justify-content-center rounded-pill bg-white text-dark shadow-sm p-3 bg-body rounded mx-auto search">
        <div className="location fs-3">
          <Location opacity={50} />
          <label className="ps-1 fs-5 pe-3 mt-8">Destinations</label>
          <div className="search-destination mt-8 d-flex">
            <i className="fa-solid fa-magnifying-glass ms-1 mt-2" />
            <select className="border border-0 mt-1 ms-1 text-secondary w-100 rounded-3">
              <option value="" disabled selected>
                Where are you going?
              </option>
            </select>
          </div>

          <label className="ps-3 fs-5 pe-3 mt-8">Category</label>
          <div className="search-destination mt-8 d-flex">
            <i className="fa-solid fa-magnifying-glass ms-1 mt-2" />
            <select className="border border-0 mt-1 ms-1 text-secondary w-100 rounded-3">
              <option value="" disabled selected>
                Choose Category...
              </option>
            </select>
          </div>

          <div>
            <button className="btn-search" type="button">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
