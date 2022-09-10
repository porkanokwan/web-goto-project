import { useEffect } from "react";
import BlogItem from "../component/blog/BlogItem";
import Pagination from "../component/ui/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlog } from "../store/blog";
import { getBlog } from "../api/blogApi";
import { useError } from "../context/ErrorContext";

function BlogHomePage() {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog);
  const { setError } = useError();

  useEffect(() => {
    const fetchAllBlog = async () => {
      try {
        const res = await getBlog();
        dispatch(getAllBlog({ blog: res.data.allBlog }));
      } catch (err) {
        setError(err.response.data.message);
      }
    };

    fetchAllBlog();
  }, []);

  return (
    <>
      <div className="bg-white min-vh-100 w-mt">
        <p className="fs-1 p-5">Blog List</p>

        {blogs.blog.map((item, idx) => (
          <BlogItem
            key={idx}
            size="w-bt"
            line="w-hr"
            picSize="card-img"
            position="justify-content-center"
            blog={item}
          />
        ))}

        <div className="ms-450">
          <Pagination />
        </div>
      </div>
    </>
  );
}

export default BlogHomePage;
