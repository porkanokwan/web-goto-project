import { useRef, useContext, useEffect } from "react";
import { Offcanvas as BsOffcanvas } from "bootstrap";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useError } from "../../context/ErrorContext";

function Offcanvas({ setOffCanvas, offcanvas }) {
  const offcanvasEl = useRef();
  const location = useLocation();

  const { user, logout } = useContext(AuthContext);
  const { setError } = useError();

  useEffect(() => {
    const offcanvas = new BsOffcanvas(offcanvasEl.current);
    setOffCanvas(offcanvas);
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const handleCancle = () => offcanvas.hide();

  return (
    <>
      <div
        className="offcanvas offcanvas-end"
        ref={offcanvasEl}
        tabIndex="1040"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
            Menu
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            onClick={handleCancle}
          ></button>
        </div>

        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <Link
                className={`nav-link  ${
                  location.pathname === "/home" ? "active" : ""
                }`}
                to="/"
                onClick={handleCancle}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link  ${
                  location.pathname === "/blog" ? "active" : ""
                }`}
                to="/blog"
                onClick={handleCancle}
              >
                Blog
              </Link>
            </li>
            <li className="nav-item">
              {user ? (
                <Link
                  className={`nav-link  ${
                    location.pathname === `/profile/${user.id}` ? "active" : ""
                  }`}
                  to={`/profile/${user.id}`}
                >
                  {user.name}
                </Link>
              ) : (
                <Link
                  className={`nav-link  ${
                    location.pathname === "/login" ? "active" : ""
                  }`}
                  to="/login"
                >
                  Login/Sign up
                </Link>
              )}
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link  ${
                  location.pathname === "/place" ? "active" : ""
                }`}
                to={user ? "/place" : "/login"}
                onClick={handleCancle}
              >
                Add Restaurant & Attractions
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link  ${
                  location.pathname.includes("create") ? "active" : ""
                }`}
                to={user ? "/create/blog" : "/login"}
                onClick={handleCancle}
              >
                Post New Blog
              </Link>
            </li>
            {user && (
              <li className="nav-item">
                <span className="nav-link" role="button" onClick={handleLogout}>
                  Logout
                </span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Offcanvas;
