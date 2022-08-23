function Carousel() {
  return (
    <>
      <div
        className="carousel carousel-dark slide carousel-fade"
        id="carousel"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://res.cloudinary.com/drwgmpw3e/image/upload/v1659171006/pisol82ljjts35fjptjj.jpg"
              className="d-block w-100"
              alt="place"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://res.cloudinary.com/drwgmpw3e/image/upload/v1658673830/cld-sample-2.jpg"
              className="d-block w-100"
              alt="place"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://res.cloudinary.com/drwgmpw3e/image/upload/v1658732432/kuhhvkra6yumjry6bmh2.jpg"
              className="d-block w-100"
              alt="place"
            />
          </div>
        </div>
      </div>

      <div className="ms-700">
        <button
          className="border border-0 bg-white fs-3"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="next"
        >
          <i className="fa-solid fa-backward" />
        </button>
        <button
          className="border border-0 bg-white fs-3 ms-5"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="next"
        >
          <i className="fa-solid fa-forward" />
        </button>
      </div>
    </>
  );
}

export default Carousel;
