import { useNavigate } from "react-router-dom";
import AllPlace from "./AllPlace";
import CardItem from "./CardItem";
import StarRating from "./StarRating";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      {/* check category มีค่าไหม ถ้ามีแสดงแบบ AllPlace ถ้าไม่แสดงแบบล่าง */}
      {false ? (
        <AllPlace />
      ) : (
        <div className="min-vh-100">
          <h1 className="ms-5 mt-5">Popular Attractions</h1>
          <div className="d-flex flex-column">
            <div className="d-flex flex-grow-1 justify-content-evenly mt-5">
              <CardItem />
              <CardItem />
              <CardItem />
            </div>
            <button
              className="mt-4 button-view"
              onClick={() => navigate("/user/1/2")}
            >
              view all Attractions
            </button>
          </div>

          <h1 className="ms-5 mt-5">Popular Restaurant & Cafe</h1>
          <div className="d-flex flex-column">
            <div className="d-flex flex-grow-1 justify-content-evenly mt-5">
              <CardItem />
              <CardItem />
              <CardItem />
            </div>
            <button className="mt-4 button-view">
              view all Restaurant & Cafe
            </button>
          </div>

          <h1 className="ms-5 mt-5">Popular Street Food</h1>
          <div className="d-flex flex-column">
            <div className="d-flex flex-grow-1 justify-content-evenly mt-5">
              <CardItem />
              <CardItem />
              <CardItem />
            </div>
            <button className="mt-4 button-view">view all Street Food</button>
          </div>

          <h1 className="ms-5 mt-5">Popular NightLife</h1>
          <div className="d-flex flex-column">
            <div className="d-flex flex-grow-1 justify-content-evenly mt-5">
              <CardItem />
              <CardItem />
              <CardItem />
            </div>
            <button className="mt-4 button-view">view all NightLife</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
