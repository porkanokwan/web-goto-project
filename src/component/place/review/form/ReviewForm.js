import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useError } from "../../../../context/ErrorContext";
import { createdReview, updatedReview } from "../../../../store/place";
import StarRating from "../../../common/StarRating";
import AddPhoto from "../../../common/AddPhoto";

function ReviewForm({ onClickCloseForm, onClickCloseEdit, reviews, arrPic }) {
  const { placeId } = useParams();
  const [review, setReview] = useState({
    title: reviews?.title || "",
    content: reviews?.review || "",
    star: reviews?.star || 0,
  });
  const [reviewPic, setReviewPic] = useState(arrPic || []);
  const [number, setNumber] = useState(arrPic || [1]);
  const dispatch = useDispatch();
  const { setError } = useError();

  const handleCreateReview = async () => {
    try {
      if (reviews?.id) {
        dispatch(updatedReview(reviews.id, placeId, review, reviewPic));
        onClickCloseEdit();
      } else {
        dispatch(createdReview(placeId, review, reviewPic));
        onClickCloseForm();
      }
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="bg-white me-5">
      <div className="d-flex justify-content-end p-3">
        <i
          className="fa-solid fa-xmark"
          role="button"
          onClick={onClickCloseForm || onClickCloseEdit}
        />
      </div>

      <div className="d-flex pt-3 ps-5 p-re">
        <h4 className="me-3">ให้คะแนนความพึงพอใจ</h4>
        <div className="mt-minus-15">
          <StarRating size="fs-3" star={review.star} setReview={setReview} />
        </div>
      </div>

      <div className="pt-3 px-5 p-re">
        <label className="fs-4">หัวเรื่องรีวิว</label>
        <input
          type="text"
          className="w-100 rounded"
          placeholder="อธิบายความพึงพอใจ/ไม่พอใจ"
          value={review.title}
          onChange={(e) =>
            setReview((prev) => ({ ...prev, title: e.target.value }))
          }
        />

        <label className="fs-4 pt-3">รายละเอียดรีวิว</label>
        <textarea
          type="text"
          className="w-100 rounded"
          rows={5}
          placeholder="คุณสามารถกล่าวถึงสถานที่แห่งนี้ในด้านต่างๆ เช่น แนะนำการเดินทาง, ประสบการณ์, กิจกรรมแนะนำ ฯลฯ"
          value={review.content}
          onChange={(e) =>
            setReview((prev) => ({ ...prev, content: e.target.value }))
          }
        ></textarea>

        <AddPhoto
          number={number}
          setNumber={setNumber}
          picture={reviewPic}
          setPic={setReviewPic}
        />
      </div>

      <button
        type="button"
        className="btn btn-outline-primary w-100 mt-3"
        onClick={handleCreateReview}
      >
        โพสต์
      </button>
    </div>
  );
}

export default ReviewForm;
