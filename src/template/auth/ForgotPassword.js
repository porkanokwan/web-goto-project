import Logo from "../img/Logo.jpg";
import { useNavigate } from "react-router-dom";
import Modal from "../ui/Modal";
import ResetPasswordForm from "./ResetPasswordForm";

function ForgotPassword() {
  const navigate = useNavigate();
  return (
    <>
      <div className="background-login">
        <img className="logo" src={Logo} alt="Logo" />
      </div>

      <div className="form-forgot">
        <form className="bg-white text-center h-75">
          <div className="input-group p-forgot">
            <span className="input-group-text">
              <i className="fa-regular fa-envelope" />
            </span>
            <input type="text" className="form-control" placeholder="email" />
          </div>

          <button
            className="btn-submit"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#modal-post"
          >
            send
          </button>
        </form>
      </div>

      <Modal title="Reset Password">
        <ResetPasswordForm />
      </Modal>
    </>
  );
}

export default ForgotPassword;
