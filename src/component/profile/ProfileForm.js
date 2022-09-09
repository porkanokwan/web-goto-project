import axios from "../../config/axios";
import { useRef, useState } from "react";
import { useError } from "../../context/ErrorContext";
import SpinnerGrow from "../common/SpinnerGrow";
import UserCard from "../common/UserCard";

function ProfileForm({ onClose, user, setUserProfile }) {
  const [loading, setLoading] = useState(false);
  const inputEl = useRef();
  const { setError } = useError();

  const handleSubmitProfileForm = async () => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("profile_pic", user.profilePic);
      formData.append("name", user.name);
      formData.append("email", user.email);
      formData.append("phoneNumber", user.phoneNumber);
      formData.append("aboutMe", user.aboutMe);
      const res = await axios.patch("/profile", formData);
      console.log(res.data);
      setUserProfile(res.data.user);
      onClose();
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <SpinnerGrow />;
  return (
    <form onSubmit={handleSubmitProfileForm} encType="multipart/form-data">
      <div className="d-flex flex-column w-25 text-center ms-275 mb-3">
        {user.profilePic ? (
          <>
            <UserCard
              src={
                typeof user.profilePic === "string"
                  ? user.profilePic
                  : URL.createObjectURL(user.profilePic)
              }
              size="pic-size"
            />
            <div
              className="w-100 ms-ep-5"
              role="button"
              onClick={() => {
                inputEl.current.value = "";
                inputEl.current.click();
              }}
            >
              <p className="text-primary text-decoration-underline">
                change picture
              </p>
              <input
                type="file"
                className="d-none"
                ref={inputEl}
                onChange={(e) => {
                  if (e.target.files[0]) {
                    setUserProfile((prev) => ({
                      ...prev,
                      profilePic: e.target.files[0],
                    }));
                  }
                }}
              />
            </div>
          </>
        ) : (
          <>
            <UserCard src={user.profilePic} size="pic-size" />
            <div
              className="w-100 ms-ep-5"
              role="button"
              onClick={() => inputEl.current.click()}
            >
              <p className="text-primary text-decoration-underline">
                change picture
              </p>
              <input
                type="file"
                className="d-none"
                ref={inputEl}
                onChange={(e) => {
                  if (e.target.files[0]) {
                    setUserProfile((prev) => ({
                      ...prev,
                      profilePic: e.target.files[0],
                    }));
                  }
                }}
              />
            </div>
          </>
        )}
      </div>

      <div className="d-flex">
        <h4 className="fw-bold">ชื่อ-นามสกุล:</h4>
        <input
          type="text"
          className="ms-3 fs-5 border border-none w-350"
          value={user.name}
          onChange={(e) =>
            setUserProfile((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      </div>
      <hr className="w-100 mt-0" />
      <div className="d-flex">
        <h4 className="fw-bold">อีเมล:</h4>
        <input
          type="text"
          className="ms-3 fs-5 border border-none w-350"
          value={user.email}
          onChange={(e) =>
            setUserProfile((prev) => ({ ...prev, email: e.target.value }))
          }
        />
      </div>
      <hr className="w-100 mt-0" />
      <div className="d-flex">
        <h4 className="fw-bold">เบอร์โทรศัพท์:</h4>
        <input
          type="text"
          className="ms-3 fs-5 border border-none w-350"
          value={user.phoneNumber}
          onChange={(e) =>
            setUserProfile((prev) => ({
              ...prev,
              phoneNumber: e.target.value,
            }))
          }
        />
      </div>
      <hr className="w-100 mt-0" />
      <div className="d-flex mt-5">
        <h4 className="fw-bold">เกี่ยวกับฉัน:</h4>
      </div>
      <hr className="w-100 mt-0" />
      <textarea
        className="area-about ms-3 fs-5"
        value={user.aboutMe}
        onChange={(e) =>
          setUserProfile((prev) => ({ ...prev, aboutMe: e.target.value }))
        }
      />
      <div className="mt-3 d-flex justify-content-end">
        <button type="submit" className="btn btn-primary">
          บันทึก
        </button>
        <button type="button" className="btn btn-danger" onClick={onClose}>
          ยกเลิก
        </button>
      </div>
    </form>
  );
}

export default ProfileForm;
