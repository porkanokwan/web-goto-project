import Header from "./Header";
import Footer from "../../../component/layout/footer/Footer";
import { Outlet, useLocation, useParams } from "react-router-dom";
import SearchBar from "./SearchBar";
import CoverCard from "../../common/CoverCard";

function CoverPic() {
  const location = useLocation();
  const { blogId } = useParams();
  return (
    <>
      <div className="header">
        <Header />
        {location.pathname !== `/blog/${blogId}` ? (
          <>
            <CoverCard text="position-title" />
            <SearchBar />
          </>
        ) : (
          <></>
        )}
      </div>

      <div>
        <Outlet />
      </div>

      <Footer />
    </>
  );
}

export default CoverPic;
