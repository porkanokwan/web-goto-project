import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useError } from "../../../context/ErrorContext";
import { Image } from "../../../icons";
import { addMenu, updateMenu } from "../../../store/menu";

function MenuForm({ menu, placeId, onClose }) {
  const [title, setTitle] = useState(menu?.title || "");
  const [menuPic, setMenuPic] = useState(menu?.menuPic || null);
  const inputEl = useRef();
  const { setError } = useError();
  const dispatch = useDispatch();

  const handleClickMenu = async () => {
    try {
      menu
        ? dispatch(updateMenu(menu.id, placeId, title, menuPic))
        : dispatch(addMenu(placeId, title, menuPic));
      onClose();
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <>
      {menuPic ? (
        <div
          className="w-100 h-250"
          role="button"
          onClick={() => {
            inputEl.current.value = "";
            inputEl.current.click();
          }}
        >
          <img
            src={
              typeof menuPic === "string"
                ? menuPic
                : URL.createObjectURL(menuPic)
            }
            alt="menu"
            width="100%"
            height="250px"
          />
          <input
            className="d-none"
            type="file"
            ref={inputEl}
            onChange={(e) => {
              if (e.target.files[0]) {
                setMenuPic(e.target.files[0]);
              }
            }}
          />
        </div>
      ) : (
        <div
          className="w-100 bg-secondary opacity-25 h-180"
          role="button"
          onClick={() => inputEl.current.click()}
        >
          <div
            className="d-flex mb-3"
            style={{ paddingTop: "125px", paddingLeft: "125px" }}
          >
            <Image color="primary fs-1 opacity-100" />
            <div className="fs-2 text-dark">
              Add Photo
              <input
                className="d-none"
                type="file"
                ref={inputEl}
                onChange={(e) => {
                  if (e.target.files[0]) {
                    setMenuPic(e.target.files[0]);
                  }
                }}
              />
            </div>
          </div>
        </div>
      )}

      <h5 className="mt-3">คำบรรยายภาพ</h5>
      <input
        type="text"
        className="w-100"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button
        type="button"
        className="btn btn-primary w-100 mt-3"
        onClick={handleClickMenu}
      >
        เพิ่ม
      </button>
    </>
  );
}

export default MenuForm;
