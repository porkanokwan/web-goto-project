import { Link, useLocation } from "react-router-dom";
import UserIcon from "../../common/UserIcon";
import Logo from "../../img/Logo.jpg";
import Dropdown from "./Dropdown";

function Header() {
  const location = useLocation();
  return (
    <>
      <div className="header header-container">
        <div>
          <Link to="/">
            <img className="logo" src={Logo} alt="Logo" />
          </Link>
        </div>

        <div className="nav-bar">
          <ul className="all-list">
            <li>
              <Link
                className={`list ${location.pathname === "/" ? "active" : ""}`}
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
              <Link to="/login" className="list">
                Login/Sign up
              </Link>
              {/* <Link to="/profile" className={`list ${
                  location.pathname === "/profile" ? "active" : ""
                }`}>
                Name account
              </Link> */}
            </li>
          </ul>
        </div>

        <div className="d-flex">
          <UserIcon size="80px" />

          <Dropdown />
        </div>
      </div>
    </>
  );
}

export default Header;
