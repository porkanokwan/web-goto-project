import { Image } from "./icons";

function PlaceInBlogForm({ count, place, setPlace }) {
  return (
    <div className="border border-dark rounded-2 d-flex flex-column mb-3 p-3">
      <div className="d-flex justify-content-between">
        <h5>สถานที่ที่ {count}</h5>
        <i className="fa-solid fa-trash mt-2" />
      </div>

      <div className="d-flex px-3">
        <label className="fs-5">ชื่อสถานที่:</label>
        <input
          type="text"
          className="ms-1 rounded-2 w-75"
          placeholder="ชื่อร้านหรือสถานที่"
        />
      </div>

      <div className="h-350 m-3 bg-secondary opacity-25" role="button">
        <div className="d-flex mb-3 fs-1 position-add">
          <Image color={"primary"} />
          <div className="add-photo ps-3 text-dark">
            Add Photo
            <input className="d-none" type="file" />
          </div>
        </div>
      </div>

      <textarea
        className="rounded-2 my-3"
        rows={6}
        placeholder="บอกเล่าเกี่ยวกับสถานที่นี้"
      />
    </div>
  );
}

export default PlaceInBlogForm;
