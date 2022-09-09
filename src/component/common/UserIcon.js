import User from "../../img/user.png";

function UserIcon({ src, size }) {
  return (
    <>
      <img
        src={src || User}
        alt="profile"
        className="rounded-circle profile"
        width={size}
        height={size}
      />
    </>
  );
}

export default UserIcon;
