function Modal({ children, picture, height }) {
  return (
    <div className="modal fade" id="modal-post" tabindex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title">{picture || "เพิ่มเมนู"}</h3>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>

          <div className={`modal-body ${height || "h-350"}`}>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
