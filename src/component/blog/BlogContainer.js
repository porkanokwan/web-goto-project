import BlogDeatail from "./BlogDeatail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useError } from "../../context/ErrorContext";
import SpinnerGrow from "../common/SpinnerGrow";
import CoverCard from "../common/CoverCard";
import { getBlogById } from "../../api/blogApi";

function BlogContainer() {
  const { blogId } = useParams();
  const [blog, setBlog] = useState("");
  const [loading, setLoading] = useState(false);
  const { setError } = useError();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const res = await getBlogById(blogId);
        setBlog(res.data.blog);
      } catch (err) {
        setError(err.response.data.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [blogId]);

  if (loading) return <SpinnerGrow />;
  return (
    <>
      <CoverCard
        coverPic={blog?.coverPic}
        title={blog.title}
        titleShow={blog.titleShow}
        text="position-title"
      />
      <BlogDeatail blog={blog} />
    </>
  );
}

export default BlogContainer;
