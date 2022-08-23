import Footer from "./layout/footer/Footer";
import Header from "./layout/header/Header";
import defaultCover from "../template/img/thailand.jpg";
import { Outlet } from "react-router-dom";

function HeaderFooterPage() {
  return (
    <div className="d-flex flex-column flex-grow-1 min-vh-100 justify-content-between">
      <div className="head-box bg-base">
        <Header />
      </div>
      {/* <div
        className="head-box"
        style={{
          backgroundImage: `url(${defaultCover})`,
          backgroundPosition: "0px -800px",
        }}
      >
        <Header />
      </div> */}
      <div className="bg-all">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default HeaderFooterPage;
