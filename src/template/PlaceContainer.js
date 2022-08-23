import { useState } from "react";
import { Link } from "react-router-dom";
import CardPic from "./CardPic";
import ProfileIcon from "./layout/header/ProfileIcon";
import PlaceContent from "./PlaceContent";
import StarRating from "./StarRating";
import Carousel from "./ui/Carousel";
import Modal from "./ui/Modal";

function PlaceContainer() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white min-vh-100">
      <div className="p-5">
        <h1>Name Place</h1>
        <StarRating star={3} size="fs-3" />
      </div>

      <Carousel />

      <PlaceContent />

      <div className="bg-lightgrey">
        <div className="d-flex justify-content-between">
          <h3 className="pt-5 ps-5 pb-0">Review</h3>
          <div className="pt-5 px-5 pb-0">
            <button
              type="button"
              className="btn btn-warning text-white"
              onClick={() => setOpen((prev) => !prev)}
            >
              เขียนรีวิว
            </button>
          </div>
        </div>

        <div className="mx-auto ps-5">
          <div className="d-flex flex-column">
            <div className="d-flex flex-grow-1">
              <ProfileIcon size="70px" />
              <div className="d-flex flex-column pt-25 ps-3">
                <h5>John Doe</h5>
                <p className="text-grey">Dec 19, 2022</p>
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
                    <Link
                      className="dropdown-item"
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#modal-post"
                    >
                      edit
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      delete
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pe-5">
              <h5 className="fw-bold">Lorem ipsum dolor sit amet</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            {/* Limit 4 */}
            <CardPic classImg="card-img" />

            <div
              role="button"
              className="d-flex flex-grow-1 justify-content-end pe-5 text-primary text-decoration-underline"
              data-bs-toggle="modal"
              data-bs-target="#modal-post"
            >
              view more picture
            </div>

            <Modal picture="picture" height="h-auto">
              <div className="w-100">
                <CardPic classImg="card-img-w" />
              </div>
            </Modal>

            <hr className="me-5" />

            {open && (
              <>
                <h3>เขียนรีวิว</h3>
                <div className="bg-white me-5">
                  <div className="d-flex pt-5 ps-5">
                    <h4 className="me-3">ให้คะแนนความพึงพอใจ</h4>
                    <div className="mt-minus-15">
                      <StarRating size="fs-3" />
                    </div>
                  </div>

                  <div className="pt-3 px-5">
                    <label className="fs-4">หัวเรื่องรีวิว</label>
                    <input
                      type="text"
                      className="w-100 rounded"
                      placeholder="อธิบายความพึงพอใจ/ไม่พอใจ"
                    />

                    <label className="fs-4 pt-3">รายละเอียดรีวิว</label>
                    <textarea
                      type="text"
                      className="w-100 rounded"
                      rows={5}
                      placeholder="คุณสามารถกล่าวถึงสถานที่แห่งนี้ในด้านต่างๆ เช่น แนะนำการเดินทาง, ประสบการณ์, กิจกรรมแนะนำ ฯลฯ"
                    ></textarea>

                    <label className="fs-4 pt-3">รูป</label>
                    <div className="d-flex mt-3 py-3" role="button">
                      <div className="text-start bg-secondary p-2 position-relative img-size me-3"></div>

                      <div className="rounded-pill rounded-size text-center bg-warning">
                        <p className="text-white">Choose File</p>
                        <p className="word">ไฟล์ JPG หรือ PNG</p>
                      </div>
                      <input type="file" className="d-none" />
                    </div>
                  </div>

                  <div className="d-flex flex-grow-1 justify-content-end">
                    <button
                      type="button"
                      className="btn btn-outline-primary rounded-4 me-5 p-3 mb-25"
                    >
                      <i className="fa-regular fa-image fs-2 me-3" />
                      <span className="fs-3">เพิ่มรูป</span>
                    </button>
                  </div>
                  <button className="btn btn-outline-primary w-100 mt-3">
                    โพสต์
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceContainer;
