import { Route, Routes } from "react-router-dom";
import AllPlace from "../template/AllPlace";
import HeaderFooterPage from "../template/HeaderFooterPage";
import CoverPic from "../template/layout/header/CoverPic";
import Login from "../template/auth/Login";
import NotFoundPage from "../template/NotFoundPage";
import Home from "../template/Home";
import BlogPage from "../template/BlogPage";
import Menu from "../template/Menu";
import PlaceContainer from "../template/PlaceContainer";
import ProfilePage from "../template/ProfilePage";
import SideBar from "../template/layout/sidebar/SideBar";
import BlogList from "../template/BlogList";
import BlogForm from "../template/BlogForm";

function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<CoverPic />}>
        <Route path="" element={<Home />} />
        <Route path=":provinceId" element={<Home />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="category/:categoryId" element={<AllPlace />} />
        <Route path="category/:categoryId/:provinceId" element={<AllPlace />} />
      </Route>

      <Route path="*" element={<HeaderFooterPage />}>
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      <Route path="/user" element={<HeaderFooterPage />}>
        <Route path=":categoryId" element={<AllPlace />} />
        <Route path=":categoryId/:provinceId" element={<AllPlace />} />
        <Route path="menu" element={<Menu />} />
        <Route path="place/:placeId" element={<PlaceContainer />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      {/* login แล้ว */}
      <Route path="/" element={<HeaderFooterPage />}>
        <Route path="profile/:userId" element={<SideBar />}>
          <Route path="" element={<ProfilePage />} />
          <Route path="blog" element={<BlogList />} />
        </Route>
        <Route path="place" element={"Place Form"} />
        <Route path="place/:placeId" element={<PlaceContainer />} />
        <Route path="blog/create" element={<BlogForm />} />
      </Route>
    </Routes>
  );
}

export default Router;
