import { useState } from "react";
import UserCard from "../common/UserCard";
import ProfileForm from "./ProfileForm";

function ProfileDetail({ user, setUserProfile, authUser }) {
  const [editProfile, setEditProfile] = useState(false);
  return (
    <>
      {editProfile ? (
        <div className="p-5 mt-5 wf-69">
          <ProfileForm
            onClose={() => setEditProfile(false)}
            user={user}
            setUserProfile={setUserProfile}
          />
        </div>
      ) : (
        <>
          <div className="d-flex flex-column w-25 text-center p-left">
            <UserCard src={user.profilePic} size="pic-size" />
            {user.id === authUser.id && (
              <div
                className="w-100 ms-ep-5"
                role="button"
                onClick={() => setEditProfile(true)}
              >
                <p className="text-primary text-decoration-underline">
                  edit profile
                </p>
              </div>
            )}
          </div>

          <div className="mr-p-80 d-flex flex-column ms-150 mt-5 w-70">
            <div className="d-flex">
              <h4 className="fw-bold">ชื่อ-นามสกุล:</h4>
              <p className="ms-3 fs-5">{user.name}</p>
            </div>
            <hr className="w-100 mt-0" />

            <div className="d-flex">
              <h4 className="fw-bold">อีเมล:</h4>
              <p className="ms-3 fs-5">
                {user.email === null || user.email === "" ? "-" : user.email}
              </p>
            </div>
            <hr className="w-100 mt-0" />

            <div className="d-flex">
              <h4 className="fw-bold">เบอร์โทรศัพท์:</h4>
              <p className="ms-3 fs-5">
                {user.phoneNumber === "null" || user.phoneNumber === ""
                  ? "-"
                  : user.phoneNumber}
              </p>
            </div>
            <hr className="w-100 mt-0" />

            <div className="d-flex mt-5">
              <h4 className="fw-bold">เกี่ยวกับฉัน:</h4>
            </div>
            <hr className="w-100 mt-0" />
            <p className="ms-3 fs-5">
              {user.aboutMe === "null" || user.aboutMe === ""
                ? "-"
                : user.aboutMe}
            </p>
          </div>
        </>
      )}
    </>
  );
}

export default ProfileDetail;
