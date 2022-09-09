import axios from "../../config/axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BlogItem from "../blog/BlogItem";
import SelectCategory from "../layout/header/SelectCategory";
import SelectDestination from "../layout/header/SelectDestination";
import { useError } from "../../context/ErrorContext";
import SpinnerGrow from "../common/SpinnerGrow";

function BlogList() {
  const { userId } = useParams();
  const [blogs, setBlog] = useState("");
  const [loading, setLoading] = useState(false);
  const { setError } = useError();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`/profile/${userId}/blog`);
        setBlog(res.data.allBlog);
      } catch (err) {
        setError(err.response.data.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [userId]);

  if (loading) return <SpinnerGrow />;
  return (
    <div className="pt-5 wb-600">
      <div className="d-flex justify-content-start">
        <div className="mt-8 text-secondary me-3 search-destination">
          <SelectDestination />
        </div>

        <div className="mt-8 text-secondary search-destination">
          <SelectCategory />
        </div>
      </div>

      <div className="d-flex flex-column mt-5 me-5 w-100">
        {blogs.length ? (
          blogs.map((item, idx) => (
            <div key={idx}>
              <div className="d-flex ms-edit text-primary">
                <Link to="/blog/edit" className="mt-minus-5">
                  <i className="fa-solid fa-pencil me-1" />
                </Link>
                <i className="fa-solid fa-trash" role="button" />
              </div>

              <BlogItem
                size="ms-0 wb-50"
                direction="fd-column"
                line="w-blog"
                picSize="card-img-bl"
                blog={item}
                likeChange={async () => {
                  const res = await axios.get(`/profile/${userId}/blog`);
                  setBlog(res.data.allBlog);
                }}
              />
            </div>
          ))
        ) : (
          <div className="box-blog">
            <h1>ไม่มี Blog ที่เขียน</h1>
            <Link to="/blog/create" className="mt-5 fs-1 text-dark opacity-50">
              <i className="fa-solid fa-file-circle-plus me-3" />
              <span>เขียน Blog ครั้งแรกที่นี่</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default BlogList;
