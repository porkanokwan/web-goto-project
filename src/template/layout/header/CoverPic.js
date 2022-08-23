import defaultCover from "../../img/thailand.jpg";
import Header from "./Header";
import Footer from "../footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";

function CoverPic() {
  const location = useLocation();
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

        {location.pathname !== `/blog/1` && <SearchBar />}
      </div>

      <div>
        <Outlet />
      </div>

      <Footer />
    </>
  );
}

export default CoverPic;
