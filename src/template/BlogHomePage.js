import BlogItem from "./BlogItem";
import Pagination from "./ui/Pagination";

function BlogHomePage() {
  return (
    <>
      <div className="bg-white min-vh-100 w-mt">
        <p className="fs-1 p-5">Blog List</p>

        <BlogItem size="w-bt" line="w-hr" picSize="card-img" />
        <BlogItem size="w-bt" line="w-hr" picSize="card-img" />
        <BlogItem size="w-bt" line="w-hr" picSize="card-img" />
        <BlogItem size="w-bt" line="w-hr" picSize="card-img" />
        <BlogItem size="w-bt" line="w-hr" picSize="card-img" />
        <BlogItem size="w-bt" line="w-hr" picSize="card-img" />
        <BlogItem size="w-bt" line="w-hr" picSize="card-img" />

        <div className="ms-450">
          <Pagination />
        </div>
      </div>
    </>
  );
}

export default BlogHomePage;
