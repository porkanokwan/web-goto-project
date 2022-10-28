import { Link, useNavigate, useSearchParams } from "react-router-dom";
import AllPlace from "./AllPlace";
import CardItem from "../component/place/CardItem";
import { useHome } from "../context/HomeContext";

function Home() {
  const navigate = useNavigate();
  const { places } = useHome();
  const [search, setSearch] = useSearchParams();
  const restaurant = places?.["Restaurant & Cafe"]?.slice(0, 4);
  const streetFood = places?.["Street Food"]?.slice(0, 4);

  return (
    <>
      {search.get("category") ? (
        <AllPlace
          categoryId={search.get("category")}
          provinceId={search.get("province")}
        />
      ) : (
        <div className="min-vh-100">
          <h1 className="title-place ms-5 mt-5">Popular Attractions</h1>
          {places?.Attractions?.length ? (
            <div className="d-flex flex-column">
              <div className="card-category mt-5">
                {places?.Attractions?.slice(0, 4).map((el, idx) => (
                  <CardItem key={idx} place={el} />
                ))}
              </div>
              <button
                className="button-view"
                onClick={() =>
                  navigate(
                    search
                      ? `/allplace?category=${1}&&province=${search.get(
                          "province"
                        )}`
                      : `/allplace?category=${1}`
                  )
                }
              >
                view all Attractions
              </button>
            </div>
          ) : (
            <div className="text-center opacity-75 p-5">
              <h2>ไม่มีร้านหรือสถานที่ในจังหวัดและหมวดหมู่นี้!!!</h2>
              <h5>คุณสามารถลงแนะนำสถานที่ในจังหวัดนี้เป็นคนแรกได้ที่นี่</h5>
              <Link to="/place">คลิกที่นี่</Link>
            </div>
          )}

          <h1 className="ms-5 mt-5">Popular Restaurant & Cafe</h1>
          {restaurant?.length ? (
            <div className="d-flex flex-column">
              <div className="card-category mt-5">
                {restaurant?.map((el, idx) => (
                  <CardItem key={idx} place={el} />
                ))}
              </div>
              <button
                className="button-view"
                onClick={() =>
                  navigate(
                    search
                      ? `/allplace?category=${2}&&province=${search.get(
                          "province"
                        )}`
                      : `/allplace?category=${2}`
                  )
                }
              >
                view all Restaurant & Cafe
              </button>
            </div>
          ) : (
            <div className="text-center opacity-75 p-5">
              <h2>ไม่มีร้านหรือสถานที่ในจังหวัดและหมวดหมู่นี้!!!</h2>
              <h5>คุณสามารถลงแนะนำสถานที่ในจังหวัดนี้เป็นคนแรกได้ที่นี่</h5>
              <Link to="/place">คลิกที่นี่</Link>
            </div>
          )}

          <h1 className="ms-5 mt-5">Popular Street Food</h1>
          {streetFood?.length ? (
            <div className="d-flex flex-column">
              <div className="card-category mt-5">
                {streetFood?.map((el, idx) => (
                  <CardItem key={idx} place={el} />
                ))}
              </div>
              <button
                className="button-view"
                onClick={() =>
                  navigate(
                    search
                      ? `/allplace?category=${3}&&province=${search.get(
                          "province"
                        )}`
                      : `/allplace?category=${3}`
                  )
                }
              >
                view all Street Food
              </button>
            </div>
          ) : (
            <div className="text-center opacity-75 p-5">
              <h2>ไม่มีร้านหรือสถานที่ในจังหวัดและหมวดหมู่นี้!!!</h2>
              <h5>คุณสามารถลงแนะนำสถานที่ในจังหวัดนี้เป็นคนแรกได้ที่นี่</h5>
              <Link to="/place">คลิกที่นี่</Link>
            </div>
          )}

          <h1 className="ms-5 mt-5">Popular NightLife</h1>
          {places?.NightLife?.length ? (
            <div className="d-flex flex-column">
              <div className="card-category mt-5">
                {places?.NightLife?.slice(0, 4).map((el, idx) => (
                  <CardItem key={idx} place={el} />
                ))}
              </div>
              <button
                className="button-view"
                role="button"
                onClick={() =>
                  navigate(
                    search
                      ? `/allplace?category=${4}&&province=${search.get(
                          "province"
                        )}`
                      : `/allplace?category=${4}`
                  )
                }
              >
                view all NightLife
              </button>
            </div>
          ) : (
            <div className="text-center opacity-75 p-5">
              <h2>ไม่มีร้านหรือสถานที่ในจังหวัดและหมวดหมู่นี้!!!</h2>
              <h5>คุณสามารถลงแนะนำสถานที่ในจังหวัดนี้เป็นคนแรกได้ที่นี่</h5>
              <Link to="/place">คลิกที่นี่</Link>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Home;
