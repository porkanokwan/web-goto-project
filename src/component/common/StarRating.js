import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

function StarRating({ setReview, star, size, disable = false, mt }) {
  const [rating, setRating] = useState(+star || null);
  const [hover, setHover] = useState(null);
  useEffect(() => setRating(+star), [star]);
  return (
    <div className="d-flex flex-wrap">
      {[1, 2, 3, 4, 5].map((star, index) => {
        const ratingValue = star;
        return (
          <div key={index}>
            <label className={`${size || ""}`}>
              <input
                className="d-none"
                type="radio"
                name="rating"
                value={rating || ratingValue}
                onChange={(e) => {
                  setReview((prev) => ({ ...prev, star: e.target.value }));
                  setRating(e.target.value);
                }}
                disabled={disable}
              />
              <FaStar
                className="stars"
                color={ratingValue <= (rating || hover) ? "#ffc107" : "e4e5e9"}
                onMouseEnter={() => {
                  if (disable) {
                    setHover(null);
                  } else {
                    setHover(ratingValue);
                  }
                }}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          </div>
        );
      })}
      {setReview ? (
        <span
          className="ms-clear mt-3 text-danger"
          role="button"
          onClick={() => {
            setRating(0);
            setReview((prev) => ({ ...prev, star: 0 }));
          }}
        >
          Clear
        </span>
      ) : (
        <span className={`score ms-3 text-secondary ${mt}`}>{star} scores</span>
      )}
    </div>
  );
}

export default StarRating;
