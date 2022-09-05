import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../img/Logo.jpg";
import SignUp from "./SignUp";

function Login() {
  const [loginOpen, setLoginOpen] = useState(true);
  const navigate = useNavigate();
  return (
    <>
      <div className="background-login">
        <img className="logo" src={Logo} alt="Logo" />
      </div>

      {loginOpen ? (
        <div className="form">
          <form className="bg-white text-center h-75">
            <div className="d-flex flex-nowrap justify-content-center">
              <button className="btn-login active-form" type="button">
                Login
              </button>
              <button
                className="btn-signup"
                type="button"
                onClick={() => setLoginOpen((prev) => !prev)}
              >
                Sign up
              </button>
            </div>

            <div className="input-group mb-54 h-25 p-150">
              <span className="input-group-text">
                <i className="fa-regular fa-envelope" />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="email or phone"
              />
            </div>

            <div className="input-group h-25 p-50">
              <span className="input-group-text">
                <i className="fa-solid fa-lock" />
              </span>
              <input
                type="password"
                className="form-control"
                placeholder="password"
              />
            </div>

            <div className="input-group link-forgot">
              <Link to="/forgot-password" className="text-decoration-none">
                Forgot your password ?
              </Link>
            </div>

            <button
              className="btn-submit"
              type="submit"
              onClick={() => navigate("/")}
            >
              Login
            </button>
          </form>
        </div>
      ) : (
        <SignUp setLoginOpen={setLoginOpen} />
      )}
    </>
  );
}

export default Login;
