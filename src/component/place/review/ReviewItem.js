import { useState } from "react";
import CardPic from "./form/CardPic";
import ProfileIcon from "../../layout/header/ProfileIcon";
import Modal from "../../ui/Modal";
import ReviewForm from "./form/ReviewForm";
import { timeSince } from "../../../service/dateFormat";
import { useError } from "../../../context/ErrorContext";
import { useDispatch } from "react-redux";
import { deletedReview } from "../../../store/place";

function ReviewItem({ review, placeId }) {
  const [open, setOpen] = useState(false);
  const [editReview, setEditReview] = useState(false);
  const { setError } = useError();
  const dispatch = useDispatch();

  const onClose = () => setOpen(false);
  const arrPic = review?.ReviewPics.map((el) => el.reviewPic);

  const handleDeleteReview = async () => {
    try {
      dispatch(deletedReview(review?.id, placeId));
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <>
      <div className="d-flex flex-column">
        <div className="d-flex flex-grow-1">
          <div className="d-flex flex-column ps-3 w-100">
            <ProfileIcon
              size="70px"
              user={review?.User.name}
              src={review?.User.profile_pic || review?.User.profilePic}
            />
            <p className="text-grey ms-90 date-review">
              {timeSince(review?.updatedAt)}
            </p>
          </div>

          <div className="m-drop dropdown">
            <i
              className="fa-solid fa-ellipsis"
              data-bs-toggle="dropdown"
              role="button"
            />

            <ul className="dropdown-menu dropdown-menu-end px-2 mt-1">
              <li>
                <button
                  role="button"
                  className="dropdown-item"
                  onClick={() => setEditReview(true)}
                >
                  edit
                </button>
              </li>
              <li>
                <button
                  role="button"
                  className="dropdown-item"
                  onClick={handleDeleteReview}
                >
                  delete
                </button>
              </li>
            </ul>
          </div>
        </div>
        {editReview ? (
          <ReviewForm
            onClickCloseEdit={() => setEditReview(false)}
            reviews={review}
            arrPic={arrPic}
          />
        ) : (
          <>
            <div className="p-re-0">
              <h5 className="fw-bold">{review?.title}</h5>
              <p>{review?.review}</p>
            </div>
            <CardPic
              classImg="card-img-review"
              pics={review?.ReviewPics.slice(0, 4)}
            />
            {review?.ReviewPics.length !== 0 && (
              <div
                role="button"
                className="d-flex flex-grow-1 justify-content-end p-le text-primary text-decoration-underline"
                onClick={() => setOpen(true)}
              >
                view more picture
              </div>
            )}
          </>
        )}

        <Modal picture="picture" height="h-auto" open={open} onClose={onClose}>
          <div className="w-100">
            <CardPic classImg="card-img-w" pics={review?.ReviewPics} />
          </div>
        </Modal>

        <hr className="me-5 mb-5" />
      </div>
    </>
  );
}

export default ReviewItem;
