import { useContext } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

function SideBar() {
  const location = useLocation();
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div className="bg-white min-vh-100 w-mt side-layout">
        <div className="side-size d-flex flex-column flex-grow-1 text-center shadow">
          <div className="mt-5">
            <Link
              to={`/profile/${user.id}`}
              className={`mx-3 mb-3 fs-1 fw-normal mt-5 ${
                location.pathname.includes("blog")
                  ? "text-dark text-decoration-none"
                  : "active text-primary"
              }`}
            >
              <i className="fa-solid fa-user me-3" />
              Profile
            </Link>
          </div>

          <div>
            <Link
              to={`/profile/${user.id}/blog`}
              className={`mx-3 mb-3 fs-1 fw-normal ${
                location.pathname.includes("blog")
                  ? "active text-primary"
                  : "text-dark text-decoration-none"
              }`}
            >
              <i className="fa-brands fa-blogger-b me-3 mt-5" />
              Blog List
            </Link>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default SideBar;
