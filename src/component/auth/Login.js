import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useError } from "../../context/ErrorContext";
import Logo from "../../img/Logo.jpg";
import { deleteToken } from "../../service/localStorage";
import SignUp from "./SignUp";

function Login() {
  const [loginOpen, setLoginOpen] = useState(true);
  const [emailorPhone, setEmailorPhone] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const { setError } = useError();
  const navigate = useNavigate();

  const handleSumbitLogin = async (e) => {
    try {
      e.preventDefault();
      await login({ emailorPhone, password });
      navigate("/");
    } catch (err) {
      setError(err.response.data.message);
      deleteToken();
    }
  };

  return (
    <>
      <div className="background-login">
        <img className="logo" src={Logo} alt="Logo" />
      </div>

      {loginOpen ? (
        <div className="form">
          <form
            className="bg-white text-center h-75"
            onSubmit={handleSumbitLogin}
          >
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
                value={emailorPhone}
                onChange={(e) => setEmailorPhone(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="input-group link-forgot">
              <Link to="/forgot-password" className="text-decoration-none">
                Forgot your password ?
              </Link>
            </div>

            <button className="btn-submit" type="submit">
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
