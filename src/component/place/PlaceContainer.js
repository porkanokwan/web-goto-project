import { useEffect, useState } from "react";
import CardPic from "../../template/CardPic";
import ProfileIcon from "../layout/header/ProfileIcon";
import PlaceContent from "./PlaceContent";
import PlaceForm from "./form/PlaceForm";
import ReviewForm from "../../template/ReviewForm";
import Modal from "../ui/Modal";
import { useParams } from "react-router-dom";
import { getPlaceById } from "../../api/placeApi";

function PlaceContainer() {
  const [open, setOpen] = useState(false);
  const [openReview, setOpenReview] = useState(false);
  const [editReview, setEditReview] = useState(false);
  const [editPlace, setEditPlace] = useState(false);
  const [place, setPlace] = useState(null);
  const { placeId } = useParams();

  useEffect(() => {
    const fetchPlace = async () => {
      const res = await getPlaceById(placeId);
      setPlace(res.data.place);
    };

    fetchPlace();
  }, [placeId]);

  const onClose = () => setOpen(false);

  if (editPlace)
    return <PlaceForm title="แก้ไขข้อมูลร้าน/สถานที่" place={place} />;
  return (
    <div className="bg-white min-vh-100">
      <PlaceContent setEditPlace={setEditPlace} place={place} />

      <div className="bg-lightgrey">
        <div className="d-flex justify-content-between">
          <h3 className="pt-5 ps-5 pb-4 fw-bold">Review</h3>
          <div className="pt-5 px-5 pb-0 pr-0">
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
          <div className="d-flex flex-column">
            <div className="d-flex flex-grow-1">
              <div className="d-flex flex-column ps-3 w-100">
                <ProfileIcon size="70px" />
                <p className="text-grey ms-90 date-review">Dec 19, 2022</p>
              </div>

              <div className="m-drop dropdown">
                <i
                  className="fa-solid fa-ellipsis"
                  data-bs-toggle="dropdown"
                  role="button"
                  aria-expanded="false"
                />

                <ul className="dropdown-menu dropdown-menu-end px-2 mt-1">
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => setEditReview(true)}
                    >
                      edit
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item">delete</button>
                  </li>
                </ul>
              </div>
            </div>
            {editReview ? (
              <ReviewForm onClickCloseEdit={() => setEditReview(false)} />
            ) : (
              <>
                <div className="p-re-0">
                  <h5 className="fw-bold">Lorem ipsum dolor sit amet</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
                {/* Limit 4 */}
                <CardPic classImg="card-img-review" />
                <div
                  role="button"
                  className="d-flex flex-grow-1 justify-content-end p-re-0 text-primary text-decoration-underline"
                  onClick={() => setOpen(true)}
                >
                  view more picture
                </div>
              </>
            )}

            <Modal
              picture="picture"
              height="h-auto"
              open={open}
              onClose={onClose}
            >
              <div className="w-100">
                <CardPic classImg="card-img-w" />
              </div>
            </Modal>

            <hr className="me-5 mr-0" />

            {openReview && (
              <>
                <h3>เขียนรีวิว</h3>
                <ReviewForm onClickCloseForm={() => setOpenReview(false)} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceContainer;
