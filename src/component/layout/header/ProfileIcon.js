import { Link } from "react-router-dom";
import UserIcon from "../../../component/common/UserIcon";

function ProfileIcon({ src, size, mt, user }) {
  return (
    <Link to={`/profile/${1}`} className="text-dark text-decoration-none">
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
