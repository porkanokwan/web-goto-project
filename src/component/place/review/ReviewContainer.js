import ReviewItem from "./ReviewItem";
import ReviewForm from "./form/ReviewForm";
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";

function ReviewContainer({ reviews, placeId }) {
  const [openReview, setOpenReview] = useState(false);
  const [openWaring, setOpenWarning] = useState(false);
  const { user } = useContext(AuthContext);

  return (
    <div className="bg-lightgrey">
      <div className="d-flex justify-content-between">
        <h3 className="pt-5 ps-5 pb-4 fw-bold">Review</h3>
        <div className="px-5 pt-5 pb-0 pr-0">
          <button
            type="button"
            className="btn btn-warning text-white"
            onClick={() => {
              user ? setOpenReview(true) : setOpenWarning(true);
            }}
          >
            เขียนรีวิว
          </button>
        </div>
      </div>
      {openWaring && (
        <div
          class="alert alert-warning mt-2 mx-5 fs-4 text-center"
          role="alert"
        >
          You have to login first!!!
        </div>
      )}

      <div className="mx-auto p-re">
        {reviews.map((item, idx) => (
          <ReviewItem key={idx} review={item} placeId={placeId} />
        ))}

        {openReview && (
          <>
            <h3>เขียนรีวิว</h3>
            <ReviewForm onClickCloseForm={() => setOpenReview(false)} />
          </>
        )}
      </div>
    </div>
  );
}

export default ReviewContainer;
