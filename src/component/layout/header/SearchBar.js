import { useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { getAllPlaceByProvinceId } from "../../../api/homeApi";
import { useError } from "../../../context/ErrorContext";
import { useHome } from "../../../context/HomeContext";
import { Location } from "../../../icons";
import SelectCategory from "./SelectCategory";
import SelectDestination from "./SelectDestination";

function SearchBar() {
  const [search, setSearch] = useSearchParams();
  const [destination, setDestination] = useState(search.get("province") || "");
  const [category, setCategory] = useState(search.get("category") || "");
  const { setPlace } = useHome();
  const { setError } = useError();
  const location = useLocation();

  const fetchAllPlace = async () => {
    try {
      let search;
      if (destination && category) {
        if (category) {
          search = {
            province: destination,
            category,
          };
        } else {
          search = undefined;
        }
        setSearch(search, { replace: true });
      } else if (destination !== "") {
        const res = await getAllPlaceByProvinceId(destination);
        setPlace(res.data.allplace);
        if (destination) {
          search = {
            province: destination,
          };
        } else {
          search = undefined;
        }
        setSearch(search, { replace: true });
      } else if (category !== "") {
        if (category) {
          search = {
            category,
          };
        } else {
          search = undefined;
        }
        setSearch(search, { replace: true });
      }
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const handleSearchBlog = () => {
    let searchBlog;
    if (category && destination) {
      if (category) {
        searchBlog = {
          category,
          province: destination,
        };
      } else {
        searchBlog = undefined;
      }
      setSearch(searchBlog, { replace: true });
    } else if (destination !== "") {
      if (destination) {
        searchBlog = {
          province: destination,
        };
      } else {
        searchBlog = undefined;
      }
      setSearch(searchBlog, { replace: true });
    } else if (category !== "") {
      if (category) {
        searchBlog = {
          category,
        };
      } else {
        searchBlog = undefined;
      }
      setSearch(searchBlog, { replace: true });
    }
  };

  return (
    <>
      <div className="d-flex flex-wrap bg-white rounded-pill justify-content-center align-items-center text-dark search">
        <div className="d-flex">
          <Location opacity={50} />
          <label className="des-x fs-s pe-3 mt-1">Destinations</label>
          <div className="search-destination mt-8 d-flex">
            <SelectDestination
              provinceId={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
        </div>

        <div className="category mb-2 d-flex">
          <label className="cate-x fs-s px-3 mt-1">Category</label>
          <div className="search-destination mt-8 d-flex">
            <SelectCategory
              categoryId={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
        </div>

        <div>
          <button
            className="btn-search"
            type="button"
            onClick={
              location.pathname === "/" ? fetchAllPlace : handleSearchBlog
            }
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
