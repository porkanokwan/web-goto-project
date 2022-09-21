import { useRef } from "react";
import { Image } from "../../icons";

function AddPhoto({ number, picture, setPic, setNumber }) {
  const inputEl = useRef();
  let i;
  return (
    <>
      <label className="fs-4 pt-3">รูป</label>
      {number.map((item, idx) => (
        <div key={idx}>
          {picture[idx] ? (
            <div className="d-flex">
              <div
                className="mt-3"
                role="button"
                onClick={() => {
                  inputEl.current?.click();
                  i = idx;
                }}
              >
                <img
                  src={
                    typeof picture[idx] === "string"
                      ? picture[idx]
                      : URL.createObjectURL(picture[idx])
                  }
                  alt="place"
                  width={"350vw"}
                />
                <input
                  type="file"
                  className="d-none"
                  ref={inputEl}
                  onChange={(e) => {
                    if (e.target.files[0]) {
                      if (picture[idx]) {
                        const newPlacePic = [...picture];
                        newPlacePic.splice(i, 1, e.target.files[0]);
                        setPic(newPlacePic);
                      } else {
                        setPic((prev) => [...prev, e.target.files[0]]);
                      }
                    }
                  }}
                />
              </div>
              <i
                className="fa-solid fa-trash text-danger mt-3 ms-3"
                role="button"
                onClick={() => {
                  const newPlacePic = [...picture];
                  newPlacePic.splice(idx, 1);
                  const newNumber = [...number];
                  newNumber.pop();
                  setNumber(newNumber);
                  setPic(newPlacePic);
                }}
              />
            </div>
          ) : (
            <div className="d-flex mt-3 py-3">
              <div className="text-start bg-secondary p-2 position-relative img-size me-3"></div>
              <div
                className="btn-img rounded-pill rounded-size text-center bg-warning"
                role="button"
                onClick={() => inputEl.current.click()}
              >
                <p className="text-white">Choose File</p>
                <p className="word">ไฟล์ JPG หรือ PNG</p>
              </div>
              <input
                type="file"
                className="d-none"
                ref={inputEl}
                onChange={(e) => {
                  if (e.target.files[0]) {
                    setPic((prev) => [...prev, e.target.files[0]]);
                  }
                }}
              />
            </div>
          )}
        </div>
      ))}

      <div className="d-flex flex-grow-1 justify-content-end">
        <button
          type="button"
          className="btn btn-outline-primary rounded-4 me-5 p-3 ma-25 fs-4 mr-0"
          onClick={() => setNumber((prev) => [...prev, number.length * 1 + 1])}
        >
          <Image />
          <span className="fs-5 ms-3">เพิ่มรูป</span>
        </button>
      </div>
    </>
  );
}

export default AddPhoto;
