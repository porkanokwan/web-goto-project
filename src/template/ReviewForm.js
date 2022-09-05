import { Image } from "./icons";
import StarRating from "./StarRating";

function ReviewForm({ onClickCloseForm, onClickCloseEdit }) {
  return (
    <div className="bg-white me-5 mr-0">
      <div className="d-flex justify-content-end p-3">
        <i
          className="fa-solid fa-xmark"
          role="button"
          onClick={onClickCloseForm || onClickCloseEdit}
        />
      </div>

      <div className="d-flex pt-3 ps-5 p-re">
        <h4 className="me-3">ให้คะแนนความพึงพอใจ</h4>
        <div className="mt-minus-15">
          <StarRating size="fs-3" />
        </div>
      </div>

      <div className="pt-3 px-5 p-re">
        <label className="fs-4">หัวเรื่องรีวิว</label>
        <input
          type="text"
          className="w-100 rounded"
          placeholder="อธิบายความพึงพอใจ/ไม่พอใจ"
        />

        <label className="fs-4 pt-3">รายละเอียดรีวิว</label>
        <textarea
          type="text"
          className="w-100 rounded"
          rows={5}
          placeholder="คุณสามารถกล่าวถึงสถานที่แห่งนี้ในด้านต่างๆ เช่น แนะนำการเดินทาง, ประสบการณ์, กิจกรรมแนะนำ ฯลฯ"
        ></textarea>

        <label className="fs-4 pt-3">รูป</label>
        <div className="d-flex mt-3 py-3" role="button">
          <div className="text-start bg-secondary p-2 position-relative img-size me-3"></div>

          <div className="rounded-pill rounded-size text-center bg-warning">
            <p className="text-white">Choose File</p>
            <p className="word">ไฟล์ JPG หรือ PNG</p>
          </div>
          <input type="file" className="d-none" />
        </div>
      </div>

      <div className="d-flex flex-grow-1 justify-content-end">
        <button
          type="button"
          className="btn btn-outline-primary rounded-4 me-5 p-3 ma-25 fs-4 mr-0"
        >
          <Image />
          <span className="fs-5 ms-3">เพิ่มรูป</span>
        </button>
      </div>

      <button className="btn btn-outline-primary w-100 mt-3">โพสต์</button>
    </div>
  );
}

export default ReviewForm;
