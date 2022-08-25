import MenuForm from "./MenuForm";
import MenuItem from "./MenuItem";
import Modal from "./ui/Modal";

function Menu() {
  return (
    <div className="overflow-s">
      <div className="d-flex flex-grow-1 justify-content-between">
        <div className="d-flex justify-content-start">
          <h1 className="pt-5 ps-5">เมนู</h1>
          <i className="fa-solid fa-utensils fs-1 mt-5" />
        </div>

        <div>
          <button
            type="button"
            className="btn btn-outline-primary mt-5 mb-25"
            data-bs-toggle="modal"
            data-bs-target="#modal-post"
          >
            <i className="fa-regular fa-image fs-2 me-3" />
            <span className="fs-3">เพิ่มเมนู</span>
          </button>
        </div>
      </div>

      <div className="container-menu mt-5 ms-250">
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
