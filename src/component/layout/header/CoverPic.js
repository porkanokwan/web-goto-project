import Header from "./Header";
import Footer from "../../../component/layout/footer/Footer";
import {
  Outlet,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import SearchBar from "./SearchBar";
import CoverCard from "../../common/CoverCard";
import { useHome } from "../../../context/HomeContext";

function CoverPic() {
  const [queryId, setQueryId] = useSearchParams();
  const location = useLocation();
  const { blogId } = useParams();
  const { category } = useHome();

  const pic = category?.find(
    (item) => item.id === +queryId.get("category")
  )?.coverPic;

  return (
    <>
      <div className="header">
        <Header />
        {location.pathname !== `/blog/${blogId}` ? (
          <>
            <CoverCard text="position-title" coverPic={pic} />
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
