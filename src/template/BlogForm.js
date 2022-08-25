import { useState } from "react";
import { Link } from "react-router-dom";
import PlaceInBlogForm from "./PlaceInBlogForm";
import { Image } from "./icons";

function BlogForm() {
  const [number, setNumber] = useState(1);
  const [toggleTitle, setToggleTitle] = useState(false);
  const [place, setPlace] = useState([{ name: "", picture: "", content: "" }]);
  const arr = [1];
  for (let i = 0; i < number - 1; i++) {
    arr.push(arr[i] + 1);
  }

  return (
    <>
      <div className="bg-white d-flex justify-content-between">
        <h2 className="p-3">Create Blog</h2>
        <Link to="/">
          <i className="fa-solid fa-xmark fs-2 text-danger p-4" />
        </Link>
      </div>

      <div role="button" className="position-relative container-fluid h-500">
        {toggleTitle && (
          <h1 className="title fw-bold position-absolute top-50 left-30">
            DISCOVER STORY-WORTHY PLACE
          </h1>
        )}
      </div>
      <div className="d-flex justify-content-center py-3">
        <button className="d-flex rounded-3 border border-0 btn-cover">
          <div className="text-center rounded-circle p-2 fs-3 me-1">
            <Image />
          </div>
          <div className="mt-2 fs-4 pe-2 py-1">เลือกรูปปก</div>
        </button>

        <button
          className="fs-4 pe-2 ms-5 rounded-3 border border-0 text-center btn-cover"
          onClick={() => setToggleTitle((prev) => !prev)}
        >
          แสดงหัวเรื่องบนภาพปก
        </button>
      </div>

      <div className="bg-white w-mt">
        <div className="bg-white w-100 mx-auto">
          <form>
            <div className="d-flex w-100 justify-content-around pt-5 fs-vw ps-35">
              <div>
                <input type="radio" id="retaurant" name="category" />
                <label className="me-3 ms-1">
                  ร้านอาหาร/คาเฟ่(Restaurant & Cafe)
                </label>
              </div>

              <div>
                <input type="radio" id="street-food" name="category" />
                <label className="me-3 ms-1">อาหารริมทาง (Street Food)</label>
              </div>

              <div>
                <input type="radio" id="nightlife" name="category" />
                <label className="me-3 ms-1">สถานบันเทิง(NightLife)</label>
              </div>

              <div>
                <input type="radio" id="attraction" name="category" />
                <label className="me-3 ms-1">
                  สถานที่ท่องเที่ยว(Attractions)
                </label>
              </div>
            </div>

            <div className="d-flex flex-column mx-5">
              <div className="my-4">
                <label className="fs-5">จังหวัด:</label>
                <select className="rounded-3 ms-3 text-secondary">
                  <option value="" disabled selected>
                    จังหวัด
                  </option>
                </select>
              </div>

              <div className="d-flex flex-column">
                <label className="fs-5">หัวเรื่อง*</label>
                <input
                  type="text"
                  className="rounded-2 input-size my-3"
                  placeholder="หัวเรื่อง Blog"
                />

                <label className="fs-5">รายละเอียด*</label>
                <textarea
                  className="rounded-2 my-3"
                  rows={6}
                  placeholder="บอกเล่าเกี่ยวกับ Blog นี้"
                />

                {arr.map((el) => (
                  <PlaceInBlogForm
                    key={el}
                    count={el}
                    place={place}
                    setPlace={setPlace}
                  />
                ))}

                <button
                  type="button"
                  className="btn btn-primary rounded mb-3"
                  onClick={() => setNumber(number + 1)}
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
          </form>
        </div>
      </div>
    </>
  );
}

export default BlogForm;
