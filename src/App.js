import Router from "./route/Router";
import { Toast } from "bootstrap";
import { useError } from "./context/ErrorContext";
import { useEffect, useRef } from "react";

function App() {
  const { error, setError } = useError();
  const toastEl = useRef();

  useEffect(() => {
    if (error) {
      const toast = new Toast(toastEl.current);
      toast.show();
      setTimeout(() => {
        setError(null);
        toast.hide();
      }, 6000);
    }
  }, [error]);

  return (
    <>
      <div
        className="toast-container position-absolute p-3 start-50 bottom-0 translate-middle-x"
        style={{ zIndex: 1600 }}
      >
        <div
          className="toast align-items-center text-white bg-danger border-0"
          ref={toastEl}
        >
          <div className="d-flex">
            <div className="toast-body">{error}</div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
            ></button>
          </div>
        </div>
      </div>

      <Router />
    </>
  );
}

export default App;
