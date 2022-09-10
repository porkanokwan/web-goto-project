import { Link } from "react-router-dom";

function DropdownItem({ position }) {
  return (
    <>
      {/* ใช้ระหว่าง MenuItem กับ PlaceContainer ร่วมกัน */}
      <i
        className="fa-solid fa-ellipsis"
        data-bs-toggle="dropdown"
        role="button"
        aria-expanded="false"
      />

      <ul className={`dropdown-menu dropdown-menu-${position} px-2 mt-`}>
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
    </>
  );
}

export default DropdownItem;
