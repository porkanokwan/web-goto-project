import { useState } from "react";
import { FaStar } from "react-icons/fa";

function StarRating({ star, size, disable = false }) {
  const [rating, setRating] = useState(star || null);
  const [hover, setHover] = useState(null);

  return (
    <>
      {[1, 2, 3, 4, 5].map((star, index) => {
        const ratingValue = star;
        return (
          <label className={`${size || ""}`}>
            <input
              className="d-none"
              key={index}
              type="radio"
              name="rating"
              value={rating || ratingValue}
              onChange={(e) => setRating(e.target.value)}
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
        );
      })}
      {star ? (
        <span className="score ms-3 fs-6 text-secondary">{star} scores</span>
      ) : rating ? (
        <span
          className="ms-900 text-danger"
          role="button"
          // onClick={() => setRating(null)}
        >
          Clear
        </span>
      ) : (
        ""
      )}
    </>
  );
}

export default StarRating;
