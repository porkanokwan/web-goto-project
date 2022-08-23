import { Link } from "react-router-dom";

function Dropdown() {
  return (
    <div className="dropdown me-5 ms-2">
      <button
        className="btn w-10 h-10 mt-5 p-0"
        data-bs-toggle="dropdown"
        type="button"
        aria-expanded="false"
      >
        <i className="fa-solid fa-caret-down" />
      </button>

      <ul className="dropdown-menu dropdown-menu-end px-2 mt-1">
        <li>
          <Link className="dropdown-item" to="#">
            Profile
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="/place">
            Add restaurant/attraction
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="/blog/create">
            Post New Blog
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <Link className="dropdown-item" to="#">
            Log out
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;
