import { useEffect, useState } from "react";
import BlogItem from "../component/blog/BlogItem";
import Pagination from "../component/ui/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlog } from "../store/blog";
import { getBlog } from "../api/blogApi";
import { useError } from "../context/ErrorContext";
import { Link, useSearchParams } from "react-router-dom";

function BlogHomePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useSearchParams();
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

  const filterdBlog =
    search.get("category") && search.get("province")
      ? blogs.blog?.filter(
          (item) =>
            item?.Category.id === +search.get("category") &&
            item?.Province.id === +search.get("province")
        )
      : search.get("province")
      ? blogs.blog?.filter(
          (item) => item?.Province.id === +search.get("province")
        )
      : search.get("category")
      ? blogs.blog?.filter(
          (item) => item?.Category.id === +search.get("category")
        )
      : blogs.blog;

  const limit = 10;
  const showBlog = filterdBlog.slice(
    (currentPage - 1) * limit,
    limit * currentPage
  );

  const changePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="bg-white min-vh-100 w-mt">
        <p className="fs-1 p-5">Blog List</p>

        {showBlog.map((item, idx) => (
          <BlogItem
            key={idx}
            size="w-bt"
            line="w-hr"
            picSize="card-img"
            position="justify-content-center"
            blog={item}
          />
        ))}
        {showBlog.length ? (
          <Pagination
            length={filterdBlog.length}
            limit={limit}
            changePage={changePage}
            currentPage={currentPage}
          />
        ) : (
          <>
            <div className="text-center mt-180">
              <h1>ไม่มี Blog รีวิวในจังหวัดหรือหมวดหมู่นี้</h1>
              <Link
                to="/create/blog"
                className="mt-5 fs-1 text-dark opacity-50"
              >
                <i className="fa-solid fa-file-circle-plus me-3" />
                <span>
                  คุณสามารถเขียน Blog แนะนำสถานที่ต่างๆ ในจังหวัดนี้ได้ที่นี่
                </span>
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default BlogHomePage;
