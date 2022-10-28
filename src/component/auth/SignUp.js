import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { validate } from "../../validate/validate";

function SignUp({ setLoginOpen }) {
  const [name, setName] = useState("");
  const [emailorPhone, setEmailorPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorValidate, setErrorValidate] = useState({
    errName: "",
    errEmailorPhone: "",
    errPassword: "",
    errConfirmPassword: "",
  });
  const value = useContext(AuthContext);

  const handleSumbitSignUp = (e) => {
    e.preventDefault();
    validate({
      name,
      emailorPhone,
      password,
      confirmPassword,
      setErrorValidate,
    });

    value.signup({ name, emailorPhone, password, confirmPassword });
  };
  return (
    <div className="form">
      <form className="bg-white text-center h-75" onSubmit={handleSumbitSignUp}>
        <div className="d-flex flex-nowrap justify-content-center">
          <button
            className="btn-login"
            type="button"
            onClick={() => setLoginOpen((prev) => !prev)}
          >
            Login
          </button>
          <button className="btn-signup active-form" type="button">
            Sign up
          </button>
        </div>

        <div className="input-group h-25 p-name">
          <span className="input-group-text">
            <i className="fa-solid fa-user" />
          </span>
          <input
            type="text"
            className={`form-control ${errorValidate.errName && "is-invalid"}`}
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errorValidate.errName !== "" ? (
            <div className="invalid-feedback ">{errorValidate.errName}</div>
          ) : (
            ""
          )}
        </div>

        <div className="input-group h-25 p-email">
          <span className="input-group-text">
            <i className="fa-regular fa-envelope" />
          </span>
          <input
            type="text"
            className={`form-control ${
              errorValidate.errEmailorPhone && "is-invalid"
            }`}
            placeholder="email or phone"
            value={emailorPhone}
            onChange={(e) => setEmailorPhone(e.target.value)}
          />
          {errorValidate.errEmailorPhone !== "" ? (
            <div className="invalid-feedback ">
              {errorValidate.errEmailorPhone}
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="input-group h-25 p-password">
          <span className="input-group-text">
            <i className="fa-solid fa-lock" />
          </span>
          <input
            type="password"
            className={`form-control ${
              errorValidate.errPassword && "is-invalid"
            }`}
            placeholder="password at least 8 characters include character and number"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errorValidate.errPassword !== "" ? (
            <div className="invalid-feedback ">{errorValidate.errPassword}</div>
          ) : (
            ""
          )}
        </div>

        <div className="input-group h-25 p-confirmpassword">
          <span className="input-group-text">
            <i className="fa-solid fa-lock" />
          </span>
          <input
            type="password"
            className={`form-control ${
              errorValidate.errConfirmPassword && "is-invalid"
            }`}
            placeholder="confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errorValidate.errConfirmPassword !== "" ? (
            <div className="invalid-feedback ">
              {errorValidate.errConfirmPassword}
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="input-group btn-mt">
          <button className="btn-submit" type="submit">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
