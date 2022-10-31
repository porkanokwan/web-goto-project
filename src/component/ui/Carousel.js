import { useEffect, useRef, useState } from "react";
import { Carousel as CarouselBs } from "bootstrap";

function Carousel({ placePic }) {
  const btnEl = useRef();
  const [carousels, setCarousel] = useState(null);

  useEffect(() => {
    const carousel = new CarouselBs(btnEl.current);
    setCarousel(carousel);
  }, []);

  const handleClick = () => {
    carousels.next();
  };

  return (
    <>
      <div
        className="carousel carousel-dark slide carousel-fade"
        style={{ zIndex: 0 }}
        data-interval="false"
        ref={btnEl}
      >
        <div className="carousel-inner">
          {placePic?.map((el, idx) => (
            <div
              key={idx}
              className={`carousel-item ${idx === 0 ? "active" : ""}`}
            >
              <img src={el.picture} className="d-block w-100" alt="place" />
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <button
          className="border border-0 bg-white fs-3"
          type="button"
          onClick={handleClick}
        >
          <i className="fa-solid fa-backward" />
        </button>
        <button
          className="border border-0 bg-white fs-3 ms-5"
          type="button"
          onClick={handleClick}
        >
          <i className="fa-solid fa-forward" />
        </button>
      </div>
    </>
  );
}

export default Carousel;
