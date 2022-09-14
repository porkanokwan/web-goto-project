import ReviewItem from "./ReviewItem";
import ReviewForm from "./form/ReviewForm";
import { useState } from "react";

function ReviewContainer({ reviews, placeId }) {
  const [openReview, setOpenReview] = useState(false);
  console.log(reviews);
  return (
    <div className="bg-lightgrey">
      <div className="d-flex justify-content-between">
        <h3 className="pt-5 ps-5 pb-4 fw-bold">Review</h3>
        <div className="px-5 pt-5 pb-0 pr-0">
          <button
            type="button"
            className="btn btn-warning text-white"
            onClick={() => setOpenReview(true)}
          >
            เขียนรีวิว
          </button>
        </div>
      </div>

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
