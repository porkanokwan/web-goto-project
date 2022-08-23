import { Link } from "react-router-dom";
import MenuForm from "./MenuForm";
import Modal from "./ui/Modal";

function MenuItem() {
  return (
    <div>
      <div className="card-container">
        <img
          className="card-img-top"
          src="https://res.cloudinary.com/drwgmpw3e/image/upload/v1659171006/pisol82ljjts35fjptjj.jpg"
          alt="attraction name"
        />
        <div className="card-box">
          <div className="mb-15 d-flex">
            <span className="text-secondary fs-1">เฟรนฟราย</span>

            <div className="dropdown ms-100 mt-3">
              <i
                className="fa-solid fa-ellipsis"
                data-bs-toggle="dropdown"
                role="button"
                aria-expanded="false"
              />

              <ul className="dropdown-menu dropdown-menu-start px-2 mt-1">
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
        </div>
        <Modal>
          <MenuForm />
        </Modal>
      </div>
    </div>
  );
}

export default MenuItem;
