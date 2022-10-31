import axios from "../../config/axios";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useError } from "../../context/ErrorContext";
import ChangePasswordForm from "./ChangePasswordForm";
import ProfileDetail from "./ProfileDetail";
import SpinnerGrow from "../common/SpinnerGrow";
import { AuthContext } from "../../context/AuthContext";
import { deleteToken } from "../../service/localStorage";

function ProfileContainer() {
  const { userId } = useParams();
  const [userProfile, setUserProfile] = useState({});
  const [chagePasswordOpen, setChagePasswordOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const { setError } = useError();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(`/profile/${userId}`);
        setUserProfile(res.data.user);
      } catch (err) {
        setError(err.response.data.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [userId]);

  if (loading) return <SpinnerGrow />;
  return (
    <div className="overflow-s">
      <div className="d-flex flex-wrap p-5">
        <ProfileDetail
          user={userProfile}
          setUserProfile={setUserProfile}
          authUser={user}
        />
      </div>

      {userProfile.id === user.id && (
        <>
          <div className="d-flex mt-5 w-pass">
            <h4 className="fw-bold">รหัสผ่าน:</h4>

            <div className="d-flex flex-grow-1 justify-content-end">
              <div
                className="password text-primary mt-1 active"
                role="button"
                onClick={() => setChagePasswordOpen(true)}
              >
                เปลี่ยนรหัสผ่าน
              </div>
            </div>
          </div>
          <hr className="w-line mt-0" />

          {chagePasswordOpen && (
            <div className="w-form-change">
              <ChangePasswordForm
                onClick={() => {
                  setChagePasswordOpen(false);
                  deleteToken();
                  navigate("/login");
                }}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default ProfileContainer;
