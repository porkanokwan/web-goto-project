import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

function Dropdown() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="dropdown me-3 ms-2">
      <button
        className="btn w-10 h-10 p-0"
        data-bs-toggle="dropdown"
        type="button"
      >
        <i className="fa-solid fa-caret-down" />
      </button>

      <ul className="dropdown-menu dropdown-menu-end px-2 mt-1">
        <li>
          <Link
            className="dropdown-item"
            to={`/profile/${user?.id ? user.id : ""}`}
          >
            {user?.name || ""}
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to={user ? "/place" : "/login"}>
            Add restaurant/attraction
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to={user ? "/create/blog" : "/login"}>
            Post New Blog
          </Link>
        </li>
        {user ? (
          <>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <button className="dropdown-item" onClick={logout}>
                Log out
              </button>
            </li>
          </>
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
}

export default Dropdown;
