import StarRating from "./StarRating";

function CardItem() {
  return (
    <div className="card-container">
      <img
        className="card-img-top"
        src="https://res.cloudinary.com/drwgmpw3e/image/upload/v1659171006/pisol82ljjts35fjptjj.jpg"
        alt="attraction name"
      />
      <div className="card-box">
        <p className="mb-15">
          <i className="fa-solid fa-location-dot" />
          <span className="ps-3">Attractions Name, Province Name</span>

          <div className="d-flex">
            <StarRating />
            <span className="ms-3">0 reviews</span>
          </div>
        </p>
      </div>
    </div>
  );
}

export default CardItem;
