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
  return (
    <>
      {/* check category มีค่าไหม ถ้ามีแสดงแบบ AllPlace ถ้าไม่แสดงแบบล่าง */}
      {false ? (
        <AllPlace />
      ) : (
        <div className="min-vh-100">
          <h1 className="title-place ms-5 mt-5">Popular Attractions</h1>
          <div className="d-flex flex-column">
            <div className="card-category d-flex flex-grow-1 justify-content-evenly mt-5">
              {places?.Attractions?.map((el, idx) => (
                <CardItem key={idx} place={el} />
              ))}
            </div>
            <button
              className="mt-4 button-view"
              onClick={() => navigate(user ? "/allplace" : "/user/allplace")}
            >
              view all Attractions
            </button>
          </div>

          <h1 className="ms-5 mt-5">Popular Restaurant & Cafe</h1>
          <div className="d-flex flex-column">
            <div className="card-category d-flex flex-grow-1 justify-content-evenly mt-5">
              {places?.Restaurant?.map((el, idx) => (
                <CardItem key={idx} place={el} />
              ))}
            </div>
            <button
              className="mt-4 button-view"
              onClick={() => navigate(user ? "/allplace" : "/user/allplace")}
            >
              view all Restaurant & Cafe
            </button>
          </div>

          <h1 className="ms-5 mt-5">Popular Street Food</h1>
          <div className="d-flex flex-column">
            <div className="card-category d-flex flex-grow-1 justify-content-evenly mt-5">
              {places?.StreetFood?.map((el, idx) => (
                <CardItem key={idx} place={el} />
              ))}
            </div>
            <button
              className="mt-4 button-view"
              onClick={() => navigate(user ? "/allplace" : "/user/allplace")}
            >
              view all Street Food
            </button>
          </div>

          <h1 className="ms-5 mt-5">Popular NightLife</h1>
          <div className="d-flex flex-column">
            <div className="card-category d-flex flex-grow-1 justify-content-evenly mt-5">
              {places?.NightLife.map((el, idx) => (
                <CardItem key={idx} place={el} />
              ))}
            </div>
            <button
              className="button-view"
              onClick={() => navigate(user ? "/allplace" : "/user/allplace")}
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
