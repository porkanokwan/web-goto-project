import MenuForm from "./form/MenuForm";
import Modal from "../ui/Modal";
import { useState } from "react";
import { useError } from "../../context/ErrorContext";
import { useDispatch } from "react-redux";
import { removeMenu } from "../../store/menu";

function MenuItem({ menu, placeId }) {
  const [open, setOpen] = useState(false);
  const { setError } = useError();
  const dispatch = useDispatch();

  const onClose = () => setOpen(false);

  const handleDeleteMenu = async () => {
    try {
      dispatch(removeMenu(menu.id, placeId));
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <>
      <div className="card-container-menu">
        <img
          className="card-img-menu"
          src={menu.menuPic}
          alt="attraction name"
        />
        <div className="card-box-menu">
          <div className="mb-15 d-flex">
            <span className="text-secondary fs-menu">{menu.title}</span>

            <div className="dropdown ms-120">
              <i
                className="fa-solid fa-ellipsis"
                data-bs-toggle="dropdown"
                role="button"
              />

              <ul className="dropdown-menu dropdown-menu-start px-2 mt-1">
                <li>
                  <span
                    role="button"
                    className="dropdown-item"
                    onClick={() => setOpen(true)}
                  >
                    edit
                  </span>
                </li>
                <li>
                  <span
                    role="button"
                    className="dropdown-item"
                    onClick={handleDeleteMenu}
                  >
                    delete
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-secondary opacity-50">by {menu?.Users[0].name}</p>
        </div>

        <Modal title="แก้ไขเมนู" open={open} onClose={onClose}>
          <MenuForm onClose={onClose} menu={menu} placeId={placeId} />
        </Modal>
      </div>
    </>
  );
}

export default MenuItem;
