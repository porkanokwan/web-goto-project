import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useError } from "../../context/ErrorContext";
import Logo from "../../img/Logo.jpg";
import { validateReset } from "../../validate/validate";

function ResetPasswordForm() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorReset, setErrorReset] = useState({
    errNewPassword: "",
    errConfirmPassword: "",
  });
  const { reset } = useContext(AuthContext);
  const { setError } = useError();
  const navigate = useNavigate();

  const handleSumbitReset = async (e) => {
    try {
      e.preventDefault();
      validateReset(newPassword, confirmPassword, setErrorReset);
      await reset({ newPassword, confirmPassword });
      navigate("/login");
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="bg-login">
      <img
        className="logo"
        src={Logo}
        alt="Logo"
        style={{
          opacity: "60%",
          position: "absolute",
          top: "-5px",
          left: "20px",
        }}
      />

      <form className="form-reset text-center" onSubmit={handleSumbitReset}>
        <div className="input-group p-reset">
          <span className="input-group-text">
            <i className="fa-solid fa-lock" />
          </span>
          <input
            type="password"
            className="form-control"
            placeholder="new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          {errorReset.errNewPassword && (
            <small className="invalid-feedback d-flex">
              {errorReset.errNewPassword}
            </small>
          )}
        </div>

        <div className="input-group p-reset">
          <span className="input-group-text">
            <i className="fa-solid fa-lock" />
          </span>
          <input
            type="password"
            className="form-control"
            placeholder="confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errorReset.errConfirmPassword && (
            <small className="invalid-feedback d-flex">
              {errorReset.errConfirmPassword}
            </small>
          )}
        </div>

        <button className="btn-reset" type="submit">
          reset
        </button>
      </form>
    </div>
  );
}

export default ResetPasswordForm;
