import { Like } from "../../icons";
import axios from "../../config/axios";
import {
  createLike,
  deleteLike,
  getBlog,
  getBlogById,
} from "../../api/blogApi";
import { useError } from "../../context/ErrorContext";
import { useDispatch } from "react-redux";
import { getAllBlog } from "../../store/blog";
import { useLocation, useNavigate } from "react-router-dom";

function LikeButton({ blog, setBlog, blogId, id }) {
  const { setError } = useError();
  const dispatch = useDispatch();
  const location = useLocation();
  const isLiked = blog.Likes?.find((item) => item.user_id === id);
  const navigate = useNavigate();

  const handleClickLike = async () => {
    try {
      if (id) {
        isLiked ? await deleteLike(blog.id) : await createLike(blog.id);
        if (location.pathname.includes("profile")) {
          const res = await axios.get(`/profile/${blog.User?.id}/blog`);
          setBlog(res.data.allBlog);
        } else if (blogId) {
          const res = await getBlogById(blogId);
          setBlog(res.data.blog);
        } else {
          const res = await getBlog();
          dispatch(getAllBlog({ blog: res.data.allBlog }));
        }
      } else {
        navigate("/login");
      }
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <>
      <Like
        mt={5}
        handleClickLike={handleClickLike}
        isLiked={isLiked ? "rgb(3, 102, 252)" : "grey"}
      />
      <span className="color-subtitle fs-4">{blog?.like}</span>
    </>
  );
}

export default LikeButton;
