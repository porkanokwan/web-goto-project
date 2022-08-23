import defaultCover from "../../img/thailand.jpg";
import Header from "./Header";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";
import SearchBar from "./SearchBar";

function CoverPic() {
  return (
    <>
      <div className="header">
        <Header />
        <img
          className="coverHome position-relative"
          src={defaultCover}
          alt="coverPicture"
        />
        <h1 className="title text-white fw-bold position-absolute position-title">
          DISCOVER STORY-WORTHY PLACE
        </h1>

        <SearchBar />
      </div>

      <div>
        <Outlet />
      </div>

      <Footer />
    </>
  );
}

export default CoverPic;
