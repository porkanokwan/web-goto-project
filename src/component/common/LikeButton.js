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

function LikeButton({ blog, setBlog, blogId, userId }) {
  const { setError } = useError();
  const dispatch = useDispatch();
  const isLiked = blog.Likes?.find((item) => item.user_id === blog.User.id);

  const handleClickLike = async () => {
    try {
      isLiked ? await deleteLike(blog.id) : await createLike(blog.id);
      if (userId) {
        const res = await axios.get(`/profile/${userId}/blog`);
        setBlog(res.data.allBlog);
      } else if (blogId) {
        const res = await getBlogById(blogId);
        setBlog(res.data.blog);
      } else {
        const res = await getBlog();
        dispatch(getAllBlog({ blog: res.data.allBlog }));
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
