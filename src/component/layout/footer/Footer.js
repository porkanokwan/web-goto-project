import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { SocialLogo } from "../../../icons";
import Logo from "../../../img/Logo.jpg";

function Footer() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <div className="w-100 bg-base mt-5">
        <div className="d-flex flex-column align-content-center">
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column box-logo">
              <img className="logo-footer" src={Logo} alt="Logo" />
              <h5 className="caption text-white fw-light fst-italic fs-vw-des">
                Discover amazing place, and Go to that place!!!
              </h5>
            </div>

            <div className="d-flex mt-180 flex-grow-1 justify-content-around fs-vw-footer">
              <Link className="text-decoration-none word" to="/">
                Home
              </Link>
              <Link className="text-decoration-none word" to="/blog">
                Blog
              </Link>
              <Link
                className="text-decoration-none word"
                to={user ? `/profile/${user.id}` : "/login"}
              >
                Profile
              </Link>
            </div>

            <div className="d-flex flex-column me-15">
              <h2 className="text-white fw-normal mt-150 w-follow">
                Follow us
              </h2>
              <div className="social-logo d-flex ms-0 justify-content-evenly">
                <SocialLogo />
              </div>
            </div>
          </div>

          <hr className="line" />
          <p className="copy-right text-white text-center">
            @2022 Go to. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
