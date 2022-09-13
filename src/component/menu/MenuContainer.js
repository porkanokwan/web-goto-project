import MenuForm from "./form/MenuForm";
import MenuItem from "./MenuItem";
import Modal from "../ui/Modal";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useError } from "../../context/ErrorContext";
import { useDispatch, useSelector } from "react-redux";
import { getAllMenu } from "../../store/menu";

function MenuContainer() {
  const { placeId } = useParams();
  const [open, setOpen] = useState(false);
  const { setError } = useError();
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menu.menus);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        dispatch(getAllMenu(placeId));
      } catch (err) {
        setError(err.response.data.message);
      }
    };

    fetchMenu();
  }, [placeId]);

  const onClose = () => setOpen(false);

  return (
    <div className="overflow-s">
      <div className="d-flex flex-grow-1 justify-content-between w-100">
        <div className="d-flex justify-content-start">
          <h1 className="pt-5 ps-5">เมนู</h1>
          <i className="fa-solid fa-utensils fs-1 mt-5" />
        </div>

        <div>
          <button
            type="button"
            className="btn btn-outline-primary mt-5 mb-25"
            onClick={() => setOpen(true)}
          >
            <i className="fa-regular fa-image fs-2 me-3" />
            <span className="fs-3">เพิ่มเมนู</span>
          </button>
        </div>
      </div>

      <div className="container-menu mt-5 ms-250">
        {menu[placeId]?.map((el, idx) => (
          <MenuItem key={idx} menu={el} placeId={placeId} />
        ))}
      </div>

      <Modal title="เพิ่มเมนู" open={open} onClose={onClose}>
        <MenuForm placeId={placeId} onClose={onClose} />
      </Modal>
    </div>
  );
}

export default MenuContainer;
