import { useContext } from "react";
import { Link } from "react-router-dom";
import UserIcon from "../../../component/common/UserIcon";
import { AuthContext } from "../../../context/AuthContext";

function ProfileIcon({ src, size, mt, user }) {
  const { user: users } = useContext(AuthContext);
  return (
    <Link
      to={users ? `/profile/${1}` : "/login"}
      className="text-dark text-decoration-none"
    >
      <div className="d-flex">
        <UserIcon src={src} size={size} />
        <div className="ms-3 w-100" style={{ marginTop: mt }}>
          <span className="fs-name">{user}</span>
        </div>
      </div>
    </Link>
  );
}

export default ProfileIcon;
