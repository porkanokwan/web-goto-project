import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import PlaceInBlogForm from "./PlaceInBlogForm";
import { Image } from "../../../icons";
import CoverCard from "../../common/CoverCard";
import SelectDestination from "../../layout/header/SelectDestination";
import { useError } from "../../../context/ErrorContext";
import SpinnerGrow from "../../common/SpinnerGrow";
import { createNewBlog, getBlogById, updatedBlog } from "../../../api/blogApi";
import ChooseCategory from "../../common/ChooseCategory";
import { validateBlogForm } from "../../../validate/validate";

function BlogForm() {
  const [number, setNumber] = useState([1]);
  const [titleShow, setTitleShow] = useState(false);
  const [form, setForm] = useState({
    categoryId: "",
    provinceId: "",
    title: "",
    content: "",
    coverPic: "",
  });
  const [places, setPlaces] = useState([
    { name: "", content: "", picture: "" },
  ]);
  const [loading, setLoading] = useState(false);
  const [errorBlog, setErrorBlog] = useState({
    errCategory: "",
    errProvince: "",
    errTitle: "",
    errContent: "",
    errcoverPic: "",
    errPlaceLength: "",
    errName: "",
    errContent: "",
    errPic: "",
  });
  const { setError } = useError();
  const navigate = useNavigate();

  const { blogId } = useParams();
  const inputEl = useRef();

  const chooseCategory = (e) => {
    setForm((prev) => ({ ...prev, categoryId: e.target.value }));
  };

  const handleClickAdd = () => {
    setNumber((prev) => [...prev, number.length * 1 + 1]);
    setPlaces((prev) => [
      ...prev,
      {
        name: "",
        content: "",
        picture: "",
      },
    ]);
  };

  const handleSubmitBlogForm = async () => {
    try {
      setLoading(true);
      const place = Object.values(places);
      if (blogId) {
        await updatedBlog(blogId, form, titleShow, place);
        navigate(`/blog/${blogId}`);
      } else {
        validateBlogForm(
          form.categoryId,
          form.provinceId,
          form.content,
          form.coverPic,
          form.title,
          setErrorBlog,
          places.length
        );
        await createNewBlog(form, titleShow, place);
        navigate("/blog");
      }
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (blogId) {
      const fetchBlog = async () => {
        try {
          setLoading(true);
          const res = await getBlogById(blogId);
          setForm({
            categoryId: res.data.blog["Category"].id,
            provinceId: res.data.blog["Province"].id,
            title: res.data.blog.title,
            content: res.data.blog.content,
            coverPic: res.data.blog.coverPic,
          });
          setTitleShow(res.data.blog.titleShow);
          setNumber([]);
          res.data.blog.PlaceInBlogs.map((el, idx) => {
            setPlaces((prev) => ({ ...prev, [idx]: el }));
            setNumber((prev) => [...prev, idx]);
            return;
          });
        } catch (err) {
          setError(err.response.data.message);
        } finally {
          setLoading(false);
        }
      };

      fetchBlog();
    }
  }, []);

  if (loading) return <SpinnerGrow />;
  return (
    <>
      <div className="bg-white d-flex justify-content-between">
        <h2 className="p-3">{blogId ? "Edit Blog" : "Create Blog"}</h2>
        <Link to="/">
          <i className="fa-solid fa-xmark fs-2 text-danger p-4" />
        </Link>
      </div>

      <form onSubmit={handleSubmitBlogForm} encType="multipart/form-data">
        {form.coverPic ? (
          <>
            <div className="position-relative container-fluid h-500">
              <CoverCard
                coverPic={
                  typeof form.coverPic === "string"
                    ? form.coverPic
                    : URL.createObjectURL(form.coverPic)
                }
                size="w-100 h-500"
                text="text-title"
                titleShow={titleShow}
                title={form.title}
              />
              <div className="d-flex py-3 btn-group">
                <button
                  className="d-flex rounded-3 border border-0 btn-cover"
                  type="button"
                  onClick={() => inputEl.current.click()}
                >
                  <div className="text-center rounded-circle p-2 fs-3 me-1">
                    <Image />
                  </div>
                  <div className="mt-2 fs-4 pe-2 py-1">เลือกรูปปก</div>
                  <input
                    type="file"
                    className="d-none"
                    ref={inputEl}
                    onChange={(e) => {
                      if (e.target.files[0]) {
                        setForm((prev) => ({
                          ...prev,
                          coverPic: e.target.files[0],
                        }));
                      }
                    }}
                  />
                </button>

                <button
                  type="button"
                  className="fs-4 pe-2 ms-5 rounded-3 border border-0 text-center btn-cover"
                  onClick={() => setTitleShow((prev) => !prev)}
                >
                  แสดงหัวเรื่องบนภาพปก
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="position-relative container-fluid h-500"></div>
            <div className="d-flex justify-content-center py-3">
              <button
                className="d-flex rounded-3 border border-0 btn-cover"
                type="button"
                onClick={() => inputEl.current.click()}
              >
                <div className="text-center rounded-circle p-2 fs-3 me-1">
                  <Image />
                </div>
                <div className="mt-2 fs-4 pe-2 py-1">เลือกรูปปก</div>
                <input
                  type="file"
                  className="d-none"
                  ref={inputEl}
                  onChange={(e) => {
                    if (e.target.files[0]) {
                      setForm((prev) => ({
                        ...prev,
                        coverPic: e.target.files[0],
                      }));
                    }
                  }}
                />
              </button>

              <button
                className="fs-4 pe-2 ms-5 rounded-3 border border-0 text-center btn-cover"
                onClick={() => setTitleShow((prev) => !prev)}
              >
                แสดงหัวเรื่องบนภาพปก
              </button>
            </div>
          </>
        )}

        <div className="bg-white w-mt">
          {errorBlog.errcoverPic && (
            <small className="invalid-feedback d-block text-center">
              {errorBlog.errcoverPic}
            </small>
          )}
          <div className="bg-white w-100 mx-auto">
            <div className="d-flex w-100 justify-content-around pt-5 fs-vw ps-35">
              <ChooseCategory
                onChange={chooseCategory}
                categoryId={form.categoryId}
              />
            </div>
            {errorBlog.errCategory && (
              <small className="invalid-feedback d-block ms-5">
                {errorBlog.errCategory}
              </small>
            )}

            <div className="d-flex flex-column mx-5">
              <div className="d-flex my-4">
                <label className="fs-5">จังหวัด:</label>
                <SelectDestination
                  display="d-none"
                  size="ms-3"
                  firstOption="จังหวัด"
                  provinceId={form.provinceId}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      provinceId: e.target.value,
                    }))
                  }
                />
                {errorBlog.errProvince && (
                  <small className="invalid-feedback d-block ms-5">
                    {errorBlog.errProvince}
                  </small>
                )}
              </div>

              <div className="d-flex flex-column">
                <label className="fs-5">หัวเรื่อง*</label>
                {errorBlog.errTitle && (
                  <small className="invalid-feedback">
                    {errorBlog.errTitle}
                  </small>
                )}
                <input
                  type="text"
                  className="rounded-2 input-size my-3"
                  placeholder="หัวเรื่อง Blog"
                  value={form.title}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      title: e.target.value,
                    }))
                  }
                />

                <label className="fs-5">รายละเอียด*</label>
                {errorBlog.errContent && (
                  <small className="invalid-feedback d-block">
                    {errorBlog.errContent}
                  </small>
                )}
                <textarea
                  className="rounded-2 my-3"
                  rows={6}
                  placeholder="บอกเล่าเกี่ยวกับ Blog นี้"
                  value={form.content}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      content: e.target.value,
                    }))
                  }
                />

                {errorBlog.errPlaceLength && (
                  <small className="invalid-feedback d-block text-center fs-4 my-3">
                    {errorBlog.errPlaceLength}
                  </small>
                )}
                {Object.keys(places).map((el, idx) => (
                  <PlaceInBlogForm
                    key={idx}
                    count={el}
                    places={places}
                    setPlaces={setPlaces}
                  />
                ))}

                <button
                  type="button"
                  className="btn btn-primary rounded mb-3"
                  onClick={handleClickAdd}
                >
                  เพิ่มสถานที่
                </button>
              </div>

              <button
                type="submit"
                className="btn btn-warning btn-post text-white fw-400 fs-5 mb-3 align-self-end"
              >
                โพสต์
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default BlogForm;
