import BlogItem from "./BlogItem";
import Pagination from "./ui/Pagination";

function BlogPage() {
  return (
    <>
      <div className="bg-white min-vh-100 w-mt">
        <p className="fs-1 p-5">Blog List</p>

        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />

        <div className="ms-450">
          <Pagination />
        </div>
      </div>
    </>
  );
}

export default BlogPage;
