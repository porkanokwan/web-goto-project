import MenuForm from "./form/MenuForm";
import MenuItem from "./MenuItem";
import Modal from "../ui/Modal";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useError } from "../../context/ErrorContext";
import { useDispatch, useSelector } from "react-redux";
import { getAllMenu } from "../../store/menu";

function MenuContainer() {
  const { placeId } = useParams();
  const [open, setOpen] = useState(false);
  const [errMenu, setErrMenu] = useState({
    errTitle: "",
    errPic: "",
  });
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

  const onClose = () => {
    setErrMenu({ errTitle: "", errPic: "" });
    setOpen(false);
  };

  return (
    <div className="overflow">
      <div className="d-flex flex-grow-1 justify-content-between w-100">
        <div className="d-flex justify-content-start">
          <h1 className="pt-5 ps-5">เมนู</h1>
          <i className="fa-solid fa-utensils fs-1 mt-5" />
        </div>

        <div className="me-3">
          <button
            type="button"
            className="btn btn-outline-primary mt-5 mb-25"
            onClick={() => setOpen(true)}
          >
            <i className="fa-regular fa-image fs-2 me-3" />
            <span>เพิ่มเมนู</span>
          </button>
        </div>
      </div>

      <div className="container-menu mt-5 ms-250">
        {menu[placeId]?.length ? (
          menu[placeId]?.map((el, idx) => (
            <MenuItem key={idx} menu={el} placeId={placeId} />
          ))
        ) : (
          <>
            <div className="grid-message text-center opacity-75 p-message">
              <h2>ยังไม่มีใครลงเมนูอาหารของร้านนี้!!!</h2>
              <h5>
                คุณสามารถลงรายการอาหารของร้านนี้เป็นคนแรกได้โดยการคลิกปุ่มด้านบน
                <i className="fa-solid fa-hand-point-up fs-5 ps-3" />
              </h5>
            </div>
          </>
        )}
      </div>

      <Modal title="เพิ่มเมนู" open={open} onClose={onClose}>
        <MenuForm
          placeId={placeId}
          onClose={onClose}
          errMenu={errMenu}
          setErrMenu={setErrMenu}
        />
      </Modal>
    </div>
  );
}

export default MenuContainer;
