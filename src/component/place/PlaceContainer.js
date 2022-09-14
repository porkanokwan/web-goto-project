import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useError } from "../../context/ErrorContext";
import PlaceContent from "./PlaceContent";
import ReviewContainer from "./review/ReviewContainer";
import PlaceForm from "./form/PlaceForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlace } from "../../store/place";

function PlaceContainer() {
  const [editPlace, setEditPlace] = useState(false);
  const { placeId } = useParams();
  const { setError } = useError();
  const dispatch = useDispatch();
  const place = useSelector((state) => state.place);

  useEffect(() => {
    const fetch = async () => {
      try {
        dispatch(fetchPlace(placeId));
      } catch (err) {
        setError(err.response.data.message);
      }
    };

    fetch();
  }, [placeId]);

  if (editPlace)
    return <PlaceForm title="แก้ไขข้อมูลร้าน/สถานที่" place={place} />;
  return (
    <div className="bg-white min-vh-100">
      {Object.keys(place.place).length === 0 ? (
        <></>
      ) : (
        <>
          <PlaceContent setEditPlace={setEditPlace} place={place.place} />
          <ReviewContainer placeId={placeId} reviews={place.reviews} />
        </>
      )}
    </div>
  );
}

export default PlaceContainer;
