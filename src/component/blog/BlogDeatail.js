import { Like, Location } from "../../icons";
import ProfileIcon from "../layout/header/ProfileIcon";
import parseDate from "../../service/dateFormat";
import PicCard from "../common/PicCard";
import LikeButton from "../common/LikeButton";
import { useParams } from "react-router-dom";

function BlogDeatail({ blog, setBlog }) {
  const { blogId } = useParams();
  return (
    <div className="bg-white w-mt">
      <div className="d-flex flex-column p-5">
        <h3>{blog.title}</h3>
        <div className="d-flex">
          <div className="d-flex mt-3">
            <ProfileIcon size={70} mt={20} user={blog.User?.name} />
          </div>

          <div className="d-flex">
            <div className="fs-5 ps-3 pt-65">
              <Location opacity={50} />
              <span className="destination color-subtitle fs-6 ">
                {blog.Category?.name} {blog.Province?.name}
              </span>
            </div>
            <p className="ms-3 mt-2 fs-6 text-secondary opacity-50 pt-66">
              {parseDate(blog.createdAt)}
            </p>
          </div>

          <div className="d-flex flex-grow-1 justify-content-end pt-70 fs-5">
            <LikeButton blog={blog} setBlog={setBlog} blogId={blogId} />
          </div>
        </div>

        <p className="my-3">{blog.content}</p>

        {blog["PlaceInBlogs"]?.map((item, idx) => (
          <div key={idx}>
            <div className="text-center my-4">
              <h5>
                {idx + 1} {item.name}
              </h5>
              <PicCard src={item.picture} size="img-pb" tooltip="blog" />
            </div>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogDeatail;
