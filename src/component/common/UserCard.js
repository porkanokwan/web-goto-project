import User from "../../img/user.png";

function UserCard({ src, size }) {
  return (
    <>
      <img src={src || User} alt="profile" className={`${size} profile`} />
    </>
  );
}

export default UserCard;
