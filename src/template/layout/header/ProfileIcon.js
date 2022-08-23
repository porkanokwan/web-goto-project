import { Link } from "react-router-dom";
import User from "../../img/user.png";

function ProfileIcon({ src, size }) {
  return (
    <Link to="#">
      <img
        src={src || User}
        alt="profile"
        className="rounded-circle profile"
        width={size}
        height={size}
      />
    </Link>
  );
}

export default ProfileIcon;
