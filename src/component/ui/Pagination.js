function Pagination({ length, limit, currentPage, changePage }) {
  const numPage = Math.ceil(length / limit);
  const arrNum = [];
  for (let n = 1; n <= numPage; n++) {
    arrNum.push(n);
  }

  return (
    <div className="ms-450">
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <p
              className={`page-link border border-0 fs-48 me-15 shadow-none bg-transparent ${
                currentPage === 1 && "disabled"
              }`}
              role="button"
              onClick={() => changePage((prev) => prev - 1)}
            >
              <span>&laquo;</span>
            </p>
          </li>
          {arrNum.map((el, idx) => (
            <li className="page-item" key={idx}>
              <p
                className={`page-link border border-0 fs-48 me-15 shadow-none bg-transparent ${
                  currentPage === el ? "text-decoration-underline" : ""
                }`}
                role="button"
                onClick={() => changePage(el)}
              >
                {el}
              </p>
            </li>
          ))}
          <li className="page-item">
            <p
              className={`page-link border border-0 fs-48 me-15 shadow-none bg-transparent ${
                currentPage === numPage && "disabled"
              }`}
              role="button"
              onClick={() => changePage((prev) => prev + 1)}
            >
              <span>&raquo;</span>
            </p>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
