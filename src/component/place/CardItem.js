import { useNavigate } from "react-router-dom";
import { Location } from "../../icons";
import StarRating from "../common/StarRating";

function CardItem({ place }) {
  const navigate = useNavigate();
  return (
    <div
      className="card-container"
      role="button"
      onClick={() => navigate(`/place/${place?.id}`)}
    >
      <img
        className="card-img-top"
        src={place?.PlacePics[0]?.picture}
        alt="attraction name"
      />
      <div className="card-box">
        <div className="mb-15">
          <div className="d-flex">
            <Location opacity={100} />
            <div className="name-location ps-1">
              <div className="cut-word">{place?.name}</div>{" "}
              {place?.Province?.name}
            </div>
          </div>

          <div className="d-flex pb-3 reviews">
            <StarRating star={place?.star} disable={true} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
