function ProfileForm({ onClick }) {
  return (
    <form>
      <div className="d-flex flex-column w-25 text-center ms-275 mb-3">
        <img
          src="https://res.cloudinary.com/drwgmpw3e/image/upload/v1659411545/oifge8vr1woptedabvft.jpg"
          alt="profile picture"
          className="pic-size"
        />

        <div className="w-100 ms-5 ms-ep-5" role="button">
          <p className="text-primary text-decoration-underline">
            change picture
          </p>
          <input type="file" className="d-none" />
        </div>
      </div>
      <div className="d-flex">
        <h4 className="fw-bold">ชื่อ-นามสกุล:</h4>
        <input type="text" className="ms-3 fs-5 border border-none w-350" />
      </div>
      <hr className="w-100 mt-0" />
      <div className="d-flex">
        <h4 className="fw-bold">อีเมล:</h4>
        <input type="text" className="ms-3 fs-5 border border-none w-350" />
      </div>
      <hr className="w-100 mt-0" />
      <div className="d-flex">
        <h4 className="fw-bold">เบอร์โทรศัพท์:</h4>
        <input type="text" className="ms-3 fs-5 border border-none w-350" />
      </div>
      <hr className="w-100 mt-0" />
      <div className="d-flex mt-5">
        <h4 className="fw-bold">เกี่ยวกับฉัน:</h4>
      </div>
      <hr className="w-100 mt-0" />
      <textarea className="area-about ms-3 fs-5" />
      <div className="mt-3 d-flex justify-content-end">
        <button type="submit" className="btn btn-primary">
          บันทึก
        </button>
        <button type="button" className="btn btn-danger" onClick={onClick}>
          ยกเลิก
        </button>
      </div>
    </form>
  );
}

export default ProfileForm;
