import axios from "../../config/axios";
import { useState } from "react";
import { useError } from "../../context/ErrorContext";
import SpinnerGrow from "../common/SpinnerGrow";

function ChangePasswordForm({ onClick }) {
  const [password, setPassword] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const { setError } = useError();

  const handleSubmitChange = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      await axios.patch("/profile/changePassword", password);
      onClick();
      setPassword({ oldPassword: "", newPassword: "", confirmPassword: "" });
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <SpinnerGrow />;
  return (
    <form onSubmit={handleSubmitChange}>
      <div className="d-flex flex-column mb-3">
        <label>รหัสผ่านปัจจุบัน*</label>
        <input
          type="password"
          className="rounded-3 input-size"
          placeholder="รหัสผ่านปัจจุบัน"
          value={password.oldPassword}
          onChange={(e) =>
            setPassword((prev) => ({ ...prev, oldPassword: e.target.value }))
          }
        />
      </div>

      <div className="d-flex flex-column mb-3">
        <label>รหัสผ่านใหม่*</label>
        <input
          type="password"
          className="rounded-3 input-size"
          placeholder="รหัสผ่านใหม่"
          value={password.newPassword}
          onChange={(e) =>
            setPassword((prev) => ({ ...prev, newPassword: e.target.value }))
          }
        />
      </div>

      <div className="d-flex flex-column mb-3">
        <label>ยืนยันรหัสผ่าน*</label>
        <input
          type="password"
          className="rounded-3 input-size"
          placeholder="ยืนยันรหัสผ่าน"
          value={password.confirmPassword}
          onChange={(e) =>
            setPassword((prev) => ({
              ...prev,
              confirmPassword: e.target.value,
            }))
          }
        />
      </div>

      <div className="d-flex justify-content-end">
        <button type="submit" className="btn btn-primary rounded-0 me-3">
          บันทึก
        </button>
        <button
          type="button"
          className="btn btn-secondary rounded-0 me-3"
          onClick={onClick}
        >
          ยกเลิก
        </button>
      </div>
    </form>
  );
}

export default ChangePasswordForm;
