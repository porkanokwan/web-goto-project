import { useState } from "react";
import CardPic from "./CardPic";
import ProfileIcon from "./layout/header/ProfileIcon";
import PlaceContent from "./PlaceContent";
import PlaceForm from "./PlaceForm";
import ReviewForm from "./ReviewForm";
import Modal from "./ui/Modal";

function PlaceContainer() {
  const [open, setOpen] = useState(false);
  const [editReview, setEditReview] = useState(false);
  const [editPlace, setEditPlace] = useState(false);

  if (editPlace) return <PlaceForm title="แก้ไขข้อมูลร้าน/สถานที่" />;
  return (
    <div className="bg-white min-vh-100">
      <PlaceContent setEditPlace={setEditPlace} />

      <div className="bg-lightgrey">
        <div className="d-flex justify-content-between">
          <h3 className="pt-5 ps-5 pb-4 fw-bold">Review</h3>
          <div className="pt-5 px-5 pb-0 pr-0">
            <button
              type="button"
              className="btn btn-warning text-white"
              onClick={() => setOpen(true)}
            >
              เขียนรีวิว
            </button>
          </div>
        </div>

        <div className="mx-auto p-re">
          <div className="d-flex flex-column">
            <div className="d-flex flex-grow-1">
              <div className="d-flex flex-column ps-3">
                <ProfileIcon size="70px" />
                <p className="text-grey ms-90 date-review w-vw">Dec 19, 2022</p>
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
                  data-bs-toggle="modal"
                  data-bs-target="#modal-post"
                >
                  view more picture
                </div>
              </>
            )}

            <Modal picture="picture" height="h-auto">
              <div className="w-100">
                <CardPic classImg="card-img-w" />
              </div>
            </Modal>

            <hr className="me-5 mr-0" />

            {open && (
              <>
                <h3>เขียนรีวิว</h3>
                <ReviewForm onClickCloseForm={() => setOpen(false)} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceContainer;
