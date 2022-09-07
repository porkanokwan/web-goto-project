import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useError } from "../../context/ErrorContext";
import Logo from "../../img/Logo.jpg";
import { deleteToken, getToken } from "../../service/localStorage";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [sendEmail, setSendEmail] = useState(false);
  const { forgot } = useContext(AuthContext);
  const { setError } = useError();

  const handleSumbitForgot = async (e) => {
    try {
      e.preventDefault();
      await forgot(email);
      setSendEmail(true);
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

      <div className="form-forgot">
        <form
          className="bg-white text-center h-75"
          onSubmit={handleSumbitForgot}
        >
          <div className="input-group p-forgot">
            <span className="input-group-text">
              <i className="fa-regular fa-envelope" />
            </span>
            <input
              type="text"
              className={`form-control ${sendEmail && "is-valid"}`}
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {sendEmail && (
              <div className="valid-feedback">
                Send Email success, please check your email
              </div>
            )}
          </div>

          <button className="btn-submit" type="submit">
            send
          </button>
        </form>
      </div>
    </>
  );
}

export default ForgotPassword;
