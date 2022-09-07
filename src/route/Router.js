import { Route, Routes } from "react-router-dom";
import AllPlace from "../pages/AllPlace";
import HeaderFooterPage from "../pages/HeaderFooterPage";
import CoverPic from "../component/layout/header/CoverPic";
import Login from "../component/auth/Login";
import NotFoundPage from "../pages/NotFoundPage";
import Home from "../pages/Home";
import BlogHomePage from "../pages/BlogHomePage";
import Menu from "../pages/Menu";
import PlaceContainer from "../template/PlaceContainer";
import ProfilePage from "../pages/ProfilePage";
import SideBar from "../component/layout/sidebar/SideBar";
import BlogList from "../component/profile/BlogList";
import BlogForm from "../component/blog/BlogForm";
import BlogPage from "../pages/BlogPage";
import PlaceForm from "../template/PlaceForm";
import ForgotPassword from "../component/auth/ForgotPassword";
import ResetPasswordForm from "../component/auth/ResetPasswordForm";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Router() {
  const { user } = useContext(AuthContext);
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPasswordForm />} />

      {user ? (
        <>
          <Route path="/" element={<CoverPic />}>
            <Route path="" element={<Home />} />
            <Route path=":provinceId" element={<Home />} />
            <Route path="blog" element={<BlogHomePage />} />
            <Route path="blog/:blogId" element={<BlogPage />} />
            <Route path="category" element={<AllPlace />} />
            <Route path="category/province" element={<AllPlace />} />
          </Route>

          <Route path="/" element={<HeaderFooterPage />}>
            <Route path="profile/:userId" element={<SideBar />}>
              <Route path="" element={<ProfilePage />} />
              <Route path="blog" element={<BlogList />} />
            </Route>
            <Route path="place" element={<PlaceForm />} />
            <Route path="place/:placeId" element={<PlaceContainer />} />
            <Route path="blog/create" element={<BlogForm />} />
            <Route path="blog/edit" element={<BlogForm />} />
          </Route>

          <Route path="*" element={<HeaderFooterPage />}>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </>
      ) : (
        <>
          <Route path="/" element={<CoverPic />}>
            <Route path="" element={<Home />} />
            <Route path=":provinceId" element={<Home />} />
            <Route path="blog" element={<BlogHomePage />} />
            <Route path="blog/:blogId" element={<BlogPage />} />
            <Route path="category" element={<AllPlace />} />
            <Route path="category/province" element={<AllPlace />} />
          </Route>

          <Route path="/user" element={<HeaderFooterPage />}>
            <Route path="allplace" element={<AllPlace />} />
            <Route path="allplace/province" element={<AllPlace />} />
            <Route path="menu/:placeId" element={<Menu />} />
            <Route path="place/:placeId" element={<PlaceContainer />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </>
      )}
    </Routes>
  );
}

export default Router;
