function MenuForm() {
  return (
    <>
      <div className="w-100 bg-secondary opacity-25 h-180" role="button">
        <div className="d-flex mb-3 position-absolute position-menu">
          <i className="fa-regular fa-image text-primary fs-1 opacity-100" />
          <div className="fs-2 text-dark">
            Add Photo
            <input className="d-none" type="file" />
          </div>
        </div>
      </div>

      <h5 className="mt-3">คำบรรยายภาพ</h5>
      <input className="w-100" />

      <button className="btn btn-primary w-100 mt-3">เพิ่ม</button>
    </>
  );
}

export default MenuForm;
