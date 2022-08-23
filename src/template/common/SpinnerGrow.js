function SpinnerGrow() {
  return (
    <div
      className="offcanvas-backdrop show d-flex justify-content-center align-items-center"
      style={{ zIndex: 1040 }}
    >
      <h3 className="text-white">...Loading</h3>

      <div class="spinner-grow text-light" role="status">
        <span></span>
      </div>
      <div class="spinner-grow text-light" role="status">
        <span></span>
      </div>
      <div class="spinner-grow text-light" role="status">
        <span></span>
      </div>
    </div>
  );
}

export default SpinnerGrow;
