import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getAllPlace, getAllPlaceByProvinceIdCategoryId } from "../api/homeApi";
import CardItem from "../component/place/CardItem";
import Pagination from "../component/ui/Pagination";
import { useError } from "../context/ErrorContext";
import { useHome } from "../context/HomeContext";

function AllPlace({ size, categoryId, provinceId }) {
  const [allPlace, setAllPlace] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [queryId, setQueryId] = useSearchParams();
  const { setError } = useError();
  const { category } = useHome();

  useEffect(() => {
    const fetchAllPlace = async () => {
      try {
        if (
          queryId.get("province") !== null &&
          queryId.get("province") !== "null"
        ) {
          const categoryId = queryId.get("category");
          const provinceId = queryId.get("province");
          const res = await getAllPlaceByProvinceIdCategoryId(
            provinceId,
            categoryId
          );
          setAllPlace(res.data.allplace);
        } else {
          const id = queryId.get("category");
          const res = await getAllPlace(id);
          setAllPlace(res.data.allplace);
        }
      } catch (err) {
        setError(err.response.data.message);
      }
    };
    fetchAllPlace();
  }, [categoryId, provinceId]);

  const filterdPlace =
    +queryId.get("province") && +queryId.get("category")
      ? allPlace?.filter(
          (el) =>
            el?.Province.id === +queryId.get("province") &&
            el?.Category.id === +queryId.get("category")
        )
      : allPlace;

  const limit = 15;
  const showPlace = filterdPlace?.slice(
    (currentPage - 1) * limit,
    limit * currentPage
  );
  const changePage = (page) => {
    setCurrentPage(page);
  };
  const name = category?.find(
    (item) => item.id === +queryId.get("category")
  ).name;

  return (
    <>
      <h1 className="p-5">All {name}</h1>

      <div className="container-place ms-all ps-45">
        {showPlace?.map((el, idx) => (
          <CardItem key={idx} place={el} size={size} />
        ))}
      </div>
      {showPlace?.length ? (
        <div className="mt-280 ms-p p-pagination">
          <Pagination
            limit={limit}
            length={allPlace?.length}
            currentPage={currentPage}
            changePage={changePage}
          />
        </div>
      ) : (
        <div className="text-center opacity-75">
          <h2>ไม่มีร้านหรือสถานที่ในจังหวัดและหมวดหมู่นี้!!!</h2>
          <h5>คุณสามารถลงแนะนำสถานที่ในจังหวัดนี้เป็นคนแรกได้ที่นี่</h5>
          <Link to="/place">คลิกที่นี่</Link>
        </div>
      )}
    </>
  );
}

export default AllPlace;
