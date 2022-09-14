import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useError } from "../../../../context/ErrorContext";
import { Image } from "../../../../icons";
import { createdReview, updatedReview } from "../../../../store/place";
import StarRating from "../../../common/StarRating";

function ReviewForm({ onClickCloseForm, onClickCloseEdit, reviews, arrPic }) {
  const { placeId } = useParams();
  const [review, setReview] = useState({
    title: reviews?.title || "",
    content: reviews?.review || "",
    star: reviews?.star || 0,
  });
  const [reviewPic, setReviewPic] = useState(arrPic || []);
  const [number, setNumber] = useState(arrPic || [1]);
  const inputEl = useRef();
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
  let i;
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

        <label className="fs-4 pt-3">รูป</label>
        {number.map((item, idx) => (
          <div key={idx}>
            {reviewPic[idx] ? (
              <div className="d-flex">
                <div
                  className="mt-3"
                  role="button"
                  onClick={() => {
                    inputEl.current?.click();
                    i = idx;
                  }}
                >
                  <img
                    src={
                      typeof reviewPic[idx] === "string"
                        ? reviewPic[idx]
                        : URL.createObjectURL(reviewPic[idx])
                    }
                    alt="review"
                    width={"350vw"}
                  />
                  <input
                    type="file"
                    className="d-none"
                    ref={inputEl}
                    onChange={(e) => {
                      if (e.target.files[0]) {
                        if (reviewPic[idx]) {
                          const newReviewPic = [...reviewPic];
                          newReviewPic.splice(i, 1, e.target.files[0]);
                          setReviewPic(newReviewPic);
                        } else {
                          setReviewPic((prev) => [...prev, e.target.files[0]]);
                        }
                      }
                    }}
                  />
                </div>
                <i
                  className="fa-solid fa-trash text-danger mt-3 ms-3"
                  role="button"
                  onClick={() => {
                    const newReviewPic = [...reviewPic];
                    newReviewPic.splice(idx, 1);
                    const newNumber = [...number];
                    newNumber.pop();
                    setNumber(newNumber);
                    setReviewPic(newReviewPic);
                  }}
                />
              </div>
            ) : (
              <div className="d-flex mt-3 py-3">
                <div className="text-start bg-secondary p-2 position-relative img-size me-3"></div>
                <div
                  className="btn-img rounded-pill rounded-size text-center bg-warning"
                  role="button"
                  onClick={() => inputEl.current.click()}
                >
                  <p className="text-white">Choose File</p>
                  <p className="word">ไฟล์ JPG หรือ PNG</p>
                </div>
                <input
                  type="file"
                  className="d-none"
                  ref={inputEl}
                  onChange={(e) => {
                    console.log(idx);
                    if (e.target.files[0]) {
                      setReviewPic((prev) => [...prev, e.target.files[0]]);
                    }
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="d-flex flex-grow-1 justify-content-end">
        <button
          type="button"
          className="btn btn-outline-primary rounded-4 me-5 p-3 ma-25 fs-4 mr-0"
          onClick={() => setNumber((prev) => [...prev, number.length * 1 + 1])}
        >
          <Image />
          <span className="fs-5 ms-3">เพิ่มรูป</span>
        </button>
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
