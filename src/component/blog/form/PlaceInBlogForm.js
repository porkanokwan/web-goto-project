import { useRef } from "react";
import { Image } from "../../../icons";

function PlaceInBlogForm({ places, setPlaces, count = "" }) {
  const inputEl = useRef();

  const handleClick = () => {
    const newPlaces = [...places];
    newPlaces.splice(count, 1);
    setPlaces(newPlaces);
  };

  const handleChangeName = (e) => {
    const newPlaces = [...places];
    newPlaces[count].name = e.target.value;
    setPlaces(newPlaces);
  };

  const handleChangeContent = (e) => {
    const newPlaces = [...places];
    newPlaces[count].content = e.target.value;
    setPlaces(newPlaces);
  };

  return (
    <div className="border border-dark rounded-2 d-flex flex-column mb-3 p-3">
      <div className="d-flex justify-content-between">
        <h5>สถานที่ที่ {count * 1 + 1}</h5>
        <i
          className="fa-solid fa-trash mt-2"
          role="button"
          onClick={handleClick}
        />
      </div>

      <div className="d-flex px-3">
        <label className="fs-5">ชื่อสถานที่:</label>
        <input
          type="text"
          className="ms-1 rounded-2 w-75"
          placeholder="ชื่อร้านหรือสถานที่"
          value={places[count]?.name}
          onChange={handleChangeName}
        />
      </div>

      {places[count].picture ? (
        <>
          <div className="h-350 m-3 bg-secondary">
            <div
              className="d-flex justify-content-end w-85 position-absolute"
              role="button"
              onClick={() => {
                if (places[count]?.picture) {
                  inputEl.current.value = "";
                  const newPlaces = [...places];
                  newPlaces[count].picture = "";
                  setPlaces(newPlaces);
                }
              }}
            >
              <i className="fa-solid fa-xmark fs-2 mt-2 text-danger" />
            </div>
            <img
              src={
                typeof places[count]?.picture === "string"
                  ? places[count]?.picture
                  : URL?.createObjectURL(places[count]?.picture)
              }
              alt="place"
              className="img-blog"
              width={"100%"}
              height={600}
            />
            <input className="d-none" type="file" ref={inputEl} />
          </div>
        </>
      ) : (
        <div
          className="h-350 m-3 bg-secondary opacity-25"
          role="button"
          onClick={() => {
            inputEl.current.click();
          }}
        >
          <div className="d-flex mb-3 fs-1 position-add">
            <Image color={"primary"} />
            <div className="add-photo ps-3 text-dark">
              Add Photo
              <input
                className="d-none"
                type="file"
                ref={inputEl}
                onChange={(e) => {
                  if (e.target.files[0]) {
                    const newPlaces = [...places];
                    newPlaces[count].picture = e.target.files[0];
                    setPlaces(newPlaces);
                  }
                }}
              />
            </div>
          </div>
        </div>
      )}

      <textarea
        className="rounded-2 my-3"
        rows={6}
        placeholder="บอกเล่าเกี่ยวกับสถานที่นี้"
        value={places[count]?.content}
        onChange={handleChangeContent}
      />
    </div>
  );
}

export default PlaceInBlogForm;
