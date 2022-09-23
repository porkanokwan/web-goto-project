import axios from "../../config/axios";
import { useEffect, useMemo, useState } from "react";
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
  const [searchProvince, setSearchProvince] = useState("");
  const [searchCategory, setSearchCategory] = useState("");

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

  const filterdBlog =
    searchCategory && searchProvince
      ? blogs?.filter(
          (item) =>
            item?.Category.id === +searchCategory &&
            item?.Province.id === +searchProvince
        )
      : searchCategory
      ? blogs?.filter((item) => item?.Category.id === +searchCategory)
      : searchProvince
      ? blogs?.filter((item) => item?.Province.id === +searchProvince)
      : blogs;

  if (loading) return <SpinnerGrow />;
  return (
    <div className="pt-5 wb-600">
      <div className="d-flex justify-content-start">
        <div className="mt-8 text-secondary me-3 search-destination">
          <SelectDestination
            provinceId={searchProvince}
            onChange={(e) => setSearchProvince(e.target.value)}
          />
        </div>

        <div className="mt-8 text-secondary search-destination">
          <SelectCategory
            categoryId={searchCategory}
            onChange={(e) => setSearchCategory(e.target.value)}
          />
        </div>
      </div>

      <div className="d-flex flex-column mt-5 me-5 w-100">
        {filterdBlog.length ? (
          filterdBlog.map((item, idx) => (
            <BlogItem
              key={idx}
              userId={userId}
              size="ms-0 wb-50"
              direction="fd-column"
              line="w-blog"
              picSize="card-img-bl"
              blogs={blogs}
              setBlog={setBlog}
              blog={item}
            />
          ))
        ) : (
          <div className="box-blog">
            <h1>ไม่มี Blog ที่เขียน</h1>
            <Link to="/create/blog" className="mt-5 fs-1 text-dark opacity-50">
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
