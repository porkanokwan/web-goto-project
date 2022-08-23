import { Link } from "react-router-dom";
import UserIcon from "../../common/UserIcon";

function ProfileIcon({ src, size, mt }) {
  return (
    <Link to={`/profile/${1}`} className="text-dark text-decoration-none">
      <div className="d-flex">
        <UserIcon src={src} size={size} />
        <div className="ms-3 fs-4" style={{ marginTop: mt }}>
          <span>John Doe</span>
        </div>
      </div>
    </Link>
  );
}

export default ProfileIcon;
