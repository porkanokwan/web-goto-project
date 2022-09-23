import Offcanvas from "../../ui/Offcanvas";
import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import UserIcon from "../../../component/common/UserIcon";
import { AuthContext } from "../../../context/AuthContext";
import Logo from "../../../img/Logo.jpg";
import Dropdown from "./Dropdown";

function Header() {
  const location = useLocation();
  const { user, setOpen } = useContext(AuthContext);
  const [offcanvas, setOffCanvas] = useState(null);

  const handleClick = () => offcanvas.show();

  return (
    <>
      <div className="header header-container">
        <nav className="navbar navbar-light w-vw">
          <div className="d-flex flex-grow-1 justify-content-between">
            <Link to="/" onClick={() => setOpen(true)}>
              <img className="logo" src={Logo} alt="Logo" />
            </Link>

            <button
              className="navbar-toggler shadow-none border-0 me-3 mb-1"
              type="button"
              onClick={handleClick}
            >
              <i className="fa-solid fa-bars text-white  menu-none" />
            </button>
          </div>

          <Offcanvas setOffCanvas={setOffCanvas} offcanvas={offcanvas} />

          <div className="nav-bar horizon-nav">
            <ul className="all-list">
              <li>
                <Link
                  className={`list ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  to="/"
                  onClick={() => setOpen(true)}
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
