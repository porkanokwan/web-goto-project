import { Link } from "react-router-dom";
import MenuForm from "./MenuForm";
import Modal from "../component/ui/Modal";

function MenuItem() {
  return (
    <>
      <div className="card-container-menu">
        <img
          className="card-img-menu"
          src="https://res.cloudinary.com/drwgmpw3e/image/upload/v1659171006/pisol82ljjts35fjptjj.jpg"
          alt="attraction name"
        />
        <div className="card-box-menu">
          <div className="mb-15 d-flex">
            <span className="text-secondary fs-2">เฟรนฟราย</span>

            <div className="dropdown ms-120">
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
          <p className="text-secondary opacity-50">by name</p>
        </div>
        <Modal title="แก้ไขเมนู">
          <MenuForm />
        </Modal>
      </div>
    </>
  );
}

export default MenuItem;
