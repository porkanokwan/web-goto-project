import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getAllPlace } from "../api/homeApi";
import CardItem from "../component/place/CardItem";
import Pagination from "../component/ui/Pagination";
import { useError } from "../context/ErrorContext";

function AllPlace({ size }) {
  const [allPlace, setAllPlace] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [categoryId, setCategoryId] = useSearchParams();
  const { setError } = useError();

  useEffect(() => {
    const fetchAllPlace = async () => {
      try {
        const id = categoryId.get("category");
        const res = await getAllPlace(id);
        setAllPlace(res.data.allplace);
      } catch (err) {
        setError(err.response.data.message);
      }
    };
    fetchAllPlace();
  }, []);
  console.log(allPlace);
  const limit = 15;
  const showPlace = allPlace?.slice(
    (currentPage - 1) * limit,
    limit * currentPage
  );
  const changePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <h1 className="p-5">All Attractions</h1>

      <div className="container-place ms-all ps-45">
        {showPlace?.map((el, idx) => (
          <CardItem key={idx} place={el} size={size} />
        ))}
      </div>
      <div className="mt-280 ms-p p-pagination">
        <Pagination
          limit={limit}
          length={allPlace?.length}
          currentPage={currentPage}
          changePage={changePage}
        />
      </div>
    </>
  );
}

export default AllPlace;
