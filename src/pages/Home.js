import { useNavigate } from "react-router-dom";
import AllPlace from "./AllPlace";
import CardItem from "../component/place/CardItem";
import { useHome } from "../context/HomeContext";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Home() {
  const navigate = useNavigate();
  const { places } = useHome();
  const { user } = useContext(AuthContext);

  const restaurant = places?.["Restaurant & Cafe"].slice(0, 4);
  const streetFood = places?.["Street Food"].slice(0, 4);

  return (
    <>
      {false ? (
        <AllPlace />
      ) : (
        <div className="min-vh-100">
          <h1 className="title-place ms-5 mt-5">Popular Attractions</h1>
          <div className="d-flex flex-column">
            <div className="card-category d-flex flex-grow-1 justify-content-evenly mt-5 flex-wrap">
              {places?.Attractions.slice(0, 4).map((el, idx) => (
                <CardItem key={idx} place={el} />
              ))}
            </div>
            <button
              className="button-view"
              onClick={() => navigate(`/allplace?category=${1}`)}
            >
              view all Attractions
            </button>
          </div>

          <h1 className="ms-5 mt-5">Popular Restaurant & Cafe</h1>
          <div className="d-flex flex-column">
            <div className="card-category d-flex flex-grow-1 justify-content-evenly mt-5">
              {restaurant?.map((el, idx) => (
                <CardItem key={idx} place={el} />
              ))}
            </div>
            <button
              className="button-view"
              onClick={() => navigate(`/allplace?category=${2}`)}
            >
              view all Restaurant & Cafe
            </button>
          </div>

          <h1 className="ms-5 mt-5">Popular Street Food</h1>
          <div className="d-flex flex-column">
            <div className="card-category d-flex flex-grow-1 justify-content-evenly mt-5">
              {streetFood?.map((el, idx) => (
                <CardItem key={idx} place={el} />
              ))}
            </div>
            <button
              className="button-view"
              onClick={() => navigate(user`/allplace?category=${3}`)}
            >
              view all Street Food
            </button>
          </div>

          <h1 className="ms-5 mt-5">Popular NightLife</h1>
          <div className="d-flex flex-column">
            <div className="card-category d-flex flex-grow-1 justify-content-evenly mt-5">
              {places?.NightLife.slice(0, 4).map((el, idx) => (
                <CardItem key={idx} place={el} />
              ))}
            </div>
            <button
              className="button-view"
              role="button"
              onClick={() => navigate(`/allplace?category=${4}`)}
            >
              view all NightLife
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
