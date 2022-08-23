import MenuForm from "./MenuForm";
import MenuItem from "./MenuItem";
import Modal from "./ui/Modal";

function Menu() {
  return (
    <div className="overflow-s">
      <div className="d-flex justify-content-between">
        <h1 className="p-5">
          เมนู <i className="fa-solid fa-utensils fs-1" />
        </h1>

        <button
          type="button"
          className="btn btn-outline-primary mt-5 me-5 p-3 mb-25"
          data-bs-toggle="modal"
          data-bs-target="#modal-post"
        >
          <i className="fa-regular fa-image fs-2 me-3" />
          <span className="fs-3">เพิ่มเมนู</span>
        </button>
      </div>

      <div className="container-menu mt-5 ms-100">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>

      <Modal>
        <MenuForm />
      </Modal>
    </div>
  );
}

export default Menu;
