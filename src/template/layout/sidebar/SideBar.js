import { Link, Outlet, useLocation, useParams } from "react-router-dom";

function SideBar() {
  const location = useLocation();
  const params = useParams();

  return (
    <>
      <div className="bg-white min-vh-100 w-mt side-layout">
        <div className="side-size d-flex shadow">
          <div className="d-flex flex-column flex-grow-1 text-center">
            <Link
              // params === userId
              to={`/profile/${1}`}
              className={`mx-3 mb-3 fs-1 fw-normal mt-5 ${
                location.pathname.includes("blog")
                  ? "text-dark text-decoration-none"
                  : "active text-primary"
              }`}
            >
              <i className="fa-solid fa-user me-3" />
              Profile
            </Link>

            <Link
              to={`/profile/${1}/blog`}
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
    </>
  );
}

export default SideBar;
