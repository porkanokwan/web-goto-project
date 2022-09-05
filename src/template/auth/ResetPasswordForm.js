import { useNavigate } from "react-router-dom";

function ResetPasswordForm() {
  const navigate = useNavigate();
  return (
    <form className="text-center">
      <div className="input-group h-25 p-reset">
        <span className="input-group-text">
          <i className="fa-solid fa-lock" />
        </span>
        <input
          type="password"
          className="form-control"
          placeholder="new password"
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
        />
      </div>

      <button
        className="btn-reset"
        type="submit"
        onClick={() => navigate("/login")}
      >
        reset
      </button>
    </form>
  );
}

export default ResetPasswordForm;
