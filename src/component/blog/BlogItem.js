import { Link } from "react-router-dom";
import PicCard from "../common/PicCard";
import { Location } from "../../icons";
import parseDate from "../../service/dateFormat";
import { useError } from "../../context/ErrorContext";
import { deleteBlog } from "../../api/blogApi";
import LikeButton from "../common/LikeButton";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function BlogItem({
  userId,
  size,
  direction = "",
  line,
  picSize,
  position,
  blogs,
  setBlog,
  blog,
}) {
  const { user } = useContext(AuthContext);
  const { setError } = useError();
  const handleDelete = async () => {
    try {
      await deleteBlog(blog.id);
      const clone = [...blogs];
      const newBlogs = clone.filter((item) => item.id !== blog.id);
      setBlog(newBlogs);
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <>
      {+userId === user.id && (
        <div className="d-flex ms-edit text-primary">
          <Link to={`/edit/blog/${blog.id}`} className="mt-minus-5">
            <i className="fa-solid fa-pencil me-1" />
          </Link>
          <i
            className="fa-solid fa-trash"
            role="button"
            onClick={handleDelete}
          />
        </div>
      )}
      <div className="d-flex flex-grow-1 flex-column mx-3">
        <div className={`d-flex ${direction} ${position} box-content`}>
          <PicCard size={picSize} src={blog?.coverPic} tooltip="name place" />
          <div className={`descript ms-5 ${size}`}>
            <Link
              to={`/blog/${blog?.id}`}
              className="fs-2 fw-400 text-dark text-decoration-none"
            >
              {blog?.title}
            </Link>
            <p>
              <Link
                to={user ? `/profile/${blog?.User.id}` : "/login"}
                className="color-subtitle text-decoration-none fs-5"
              >
                {blog?.User.name}
              </Link>
            </p>
            <p className="color-subtitle fs-5">{parseDate(blog?.createdAt)}</p>

            <div className="d-flex flex-grow-1 justify-content-between like">
              <div className="fs-3">
                <Location opacity={50} />
                <span className="destination color-subtitle fs-5">
                  {blog?.Category.name} {blog?.Province.name}
                </span>
              </div>

              <span className="like fs-2">
                <LikeButton
                  blog={blog}
                  setBlog={setBlog}
                  id={user.id === userId ? userId : user.id}
                />
              </span>
            </div>
          </div>
        </div>

        <hr className={`text-dark mx-auto mb-50 ${line}`} />
      </div>
    </>
  );
}

export default BlogItem;
