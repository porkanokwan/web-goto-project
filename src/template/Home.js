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
              className="mt-3 button-view"
              onClick={() => navigate("/user/1/2")}
            >
              view all Attractions
            </button>
          </div>

          <h1 className="ms-5 mt-5">Popular Restaurant & Cafe</h1>
          <div className="d-flex flex-column">
            <div className="d-flex flex-grow-1 justify-content-evenly mt-5">
              <div className="card-container">
                <img
                  className="card-img-top"
                  src="https://res.cloudinary.com/drwgmpw3e/image/upload/v1659171006/pisol82ljjts35fjptjj.jpg"
                  alt="attraction name"
                />
                <div className="card-box">
                  <p className="mb-15">
                    <i className="fa-solid fa-location-dot" />
                    <span className="ps-3">
                      Attractions Name, Province Name
                    </span>
                  </p>
                  <StarRating />
                </div>
              </div>

              <div className="card-container">
                <img
                  className="card-img-top"
                  src="https://res.cloudinary.com/drwgmpw3e/image/upload/v1659171006/pisol82ljjts35fjptjj.jpg"
                  alt="attraction name"
                />
                <div className="card-box">
                  <p className="mb-15">
                    <i className="fa-solid fa-location-dot" />
                    <span className="ps-3">
                      Attractions Name, Province Name
                    </span>
                  </p>
                  <StarRating />
                </div>
              </div>

              <div className="card-container">
                <img
                  className="card-img-top"
                  src="https://res.cloudinary.com/drwgmpw3e/image/upload/v1659171006/pisol82ljjts35fjptjj.jpg"
                  alt="attraction name"
                />
                <div className="card-box">
                  <p className="mb-15">
                    <i className="fa-solid fa-location-dot" />
                    <span className="ps-3">
                      Attractions Name, Province Name
                    </span>
                  </p>
                  <StarRating />
                </div>
              </div>
            </div>
            <button className="mt-3 button-view">
              view all Restaurant & Cafe
            </button>
          </div>

          <h1 className="ms-5 mt-5">Popular Street Food</h1>
          <div className="d-flex flex-column">
            <div className="d-flex flex-grow-1 justify-content-evenly mt-5">
              <div className="card-container">
                <img
                  className="card-img-top"
                  src="https://res.cloudinary.com/drwgmpw3e/image/upload/v1659171006/pisol82ljjts35fjptjj.jpg"
                  alt="attraction name"
                />
                <div className="card-box">
                  <p className="mb-15">
                    <i className="fa-solid fa-location-dot" />
                    <span className="ps-3">
                      Attractions Name, Province Name
                    </span>
                  </p>
                  <StarRating />
                </div>
              </div>

              <div className="card-container">
                <img
                  className="card-img-top"
                  src="https://res.cloudinary.com/drwgmpw3e/image/upload/v1659171006/pisol82ljjts35fjptjj.jpg"
                  alt="attraction name"
                />
                <div className="card-box">
                  <p className="mb-15">
                    <i className="fa-solid fa-location-dot" />
                    <span className="ps-3">
                      Attractions Name, Province Name
                    </span>
                  </p>
                  <StarRating />
                </div>
              </div>

              <div className="card-container">
                <img
                  className="card-img-top"
                  src="https://res.cloudinary.com/drwgmpw3e/image/upload/v1659171006/pisol82ljjts35fjptjj.jpg"
                  alt="attraction name"
                />
                <div className="card-box">
                  <p className="mb-15">
                    <i className="fa-solid fa-location-dot" />
                    <span className="ps-3">
                      Attractions Name, Province Name
                    </span>
                  </p>
                  <StarRating />
                </div>
              </div>
            </div>
            <button className="mt-3 button-view">view all Street Food</button>
          </div>

          <h1 className="ms-5 mt-5">Popular NightLife</h1>
          <div className="d-flex flex-column">
            <div className="d-flex flex-grow-1 justify-content-evenly mt-5">
              <div className="card-container">
                <img
                  className="card-img-top"
                  src="https://res.cloudinary.com/drwgmpw3e/image/upload/v1659171006/pisol82ljjts35fjptjj.jpg"
                  alt="attraction name"
                />
                <div className="card-box">
                  <p className="mb-15">
                    <i className="fa-solid fa-location-dot" />
                    <span className="ps-3">
                      Attractions Name, Province Name
                    </span>
                  </p>
                  <StarRating />
                </div>
              </div>

              <div className="card-container">
                <img
                  className="card-img-top"
                  src="https://res.cloudinary.com/drwgmpw3e/image/upload/v1659171006/pisol82ljjts35fjptjj.jpg"
                  alt="attraction name"
                />
                <div className="card-box">
                  <p className="mb-15">
                    <i className="fa-solid fa-location-dot" />
                    <span className="ps-3">
                      Attractions Name, Province Name
                    </span>
                  </p>
                  <StarRating />
                </div>
              </div>

              <div className="card-container">
                <img
                  className="card-img-top"
                  src="https://res.cloudinary.com/drwgmpw3e/image/upload/v1659171006/pisol82ljjts35fjptjj.jpg"
                  alt="attraction name"
                />
                <div className="card-box">
                  <p className="mb-15">
                    <i className="fa-solid fa-location-dot" />
                    <span className="ps-3">
                      Attractions Name, Province Name
                    </span>
                  </p>
                  <StarRating />
                </div>
              </div>
            </div>
            <button className="mt-3 button-view">view all NightLife</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
