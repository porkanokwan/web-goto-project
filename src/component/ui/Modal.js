import { useEffect, useRef, useState } from "react";
import { Modal as ModalBs } from "bootstrap";

function Modal({ children, title, height, open, onClose }) {
  const modalEl = useRef();
  const [modal, setModal] = useState(null);

  useEffect(() => {
    const modal = new ModalBs(modalEl.current);
    setModal(modal);
  }, []);

  useEffect(() => {
    open ? modal?.show() : modal?.hide();
  }, [open]);

  return (
    <div className="modal fade" tabIndex="-1" ref={modalEl} onClick={onClose}>
      <div
        className="modal-dialog modal-dialog-centered"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title">{title}</h3>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>

          <div className={`modal-body ${height || ""}`}>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
