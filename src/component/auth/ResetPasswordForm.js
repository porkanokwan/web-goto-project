import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useError } from "../../context/ErrorContext";
import Logo from "../../img/Logo.jpg";

function ResetPasswordForm() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { reset } = useContext(AuthContext);
  const { setError } = useError();
  const navigate = useNavigate();

  const handleSumbitReset = async (e) => {
    try {
      e.preventDefault();
      await reset({ newPassword, confirmPassword });
      navigate("/login");
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <>
      <div className="background-login">
        <img className="logo" src={Logo} alt="Logo" />
      </div>

      <form className="form-reset text-center" onSubmit={handleSumbitReset}>
        <div className="input-group h-25 p-reset">
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
        </div>

        <div className="input-group h-25 p-reset">
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
        </div>

        <button className="btn-reset" type="submit">
          reset
        </button>
      </form>
    </>
  );
}

export default ResetPasswordForm;
