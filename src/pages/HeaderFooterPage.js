import Footer from "../component/layout/footer/Footer";
import Header from "../component/layout/header/Header";
import defaultCover from "../img/thailand.jpg";
import { Outlet, useLocation } from "react-router-dom";

function HeaderFooterPage() {
  const location = useLocation();
  return (
    <div className="d-flex flex-column flex-grow-1 min-vh-100 justify-content-between">
      {location.pathname.includes("profile") ? (
        <div className="head-box bg-base">
          <Header />
        </div>
      ) : (
        <div
          className="head-box"
          style={{
            backgroundImage: `url(${defaultCover})`,
            backgroundPosition: "0px -800px",
          }}
        >
          <Header />
        </div>
      )}

      <div className="bg-all">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default HeaderFooterPage;
