import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import UserIcon from "../../../component/common/UserIcon";
import { AuthContext } from "../../../context/AuthContext";
import { useError } from "../../../context/ErrorContext";
import Logo from "../../../img/Logo.jpg";
import Dropdown from "./Dropdown";

function Header() {
  const location = useLocation();
  const { user, logout } = useContext(AuthContext);
  const { setError } = useError();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <>
      <div className="header header-container">
        <nav className="navbar navbar-light w-vw">
          <div className="d-flex flex-grow-1 justify-content-between">
            <Link to="/">
              <img className="logo" src={Logo} alt="Logo" />
            </Link>

            <button
              className="navbar-toggler shadow-none border-0 me-3 mb-1"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#navbarOffcanvasmd"
            >
              <i className="fa-solid fa-bars text-white  menu-none" />
            </button>
          </div>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="navbarOffcanvasmd"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Menu
              </h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
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
                  >
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  {user ? (
                    <Link
                      className={`nav-link  ${
                        location.pathname === `/profile/${user.id}`
                          ? "active"
                          : ""
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
                    to="/place"
                  >
                    Add Restaurant & Attractions
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link  ${
                      location.pathname.includes("create") ? "active" : ""
                    }`}
                    to="/create/blog"
                  >
                    Post New Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <span className="nav-link" onClick={handleLogout}>
                    Logout
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="nav-bar horizon-nav">
            <ul className="all-list">
              <li>
                <Link
                  className={`list ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className={`list ${
                    location.pathname === "/blog" ? "active" : ""
                  }`}
                >
                  Blog
                </Link>
              </li>
              <li>
                {user ? (
                  <Link
                    to={`/profile/${user.id}`}
                    className={`list ${
                      location.pathname === `/profile/${user.id}`
                        ? "active"
                        : ""
                    }`}
                  >
                    {user.name}
                  </Link>
                ) : (
                  <Link to="/login" className="list">
                    Login/Sign up
                  </Link>
                )}
              </li>
            </ul>
          </div>

          <div className="d-flex horizon-nav">
            <UserIcon size="80px" src={user.profilePic} />

            <Dropdown />
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
