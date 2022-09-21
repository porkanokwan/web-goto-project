import axios from "../config/axios";

export const getAllPlace = () => {
  return axios.get("/");
};

export const getPlaceById = (placeId) => {
  return axios.get(`/place/${placeId}`);
};

export const getMenu = (placeId) => {
  return axios.get(`/menu/${placeId}`);
};

export const createMenu = (placeId, title, menuPic) => {
  const formData = new FormData();
  formData.append("title", title);
  formData.append("menu_pic", menuPic);
  return axios.post(`/menu/${placeId}`, formData);
};

export const updateMenuId = (menuId, placeId, title, menuPic) => {
  const formData = new FormData();
  formData.append("title", title);
  formData.append("menu_pic", menuPic);
  return axios.patch(`/menu/${menuId}/place/${placeId}`, formData);
};

export const deleteMenu = (menuId, placeId) => {
  return axios.delete(`/menu/${menuId}/place/${placeId}`);
};

export const createReview = (placeId, review, reviewPic) => {
  const formData = new FormData();
  for (let item of reviewPic) {
    formData.append("review_pic", item);
  }
  formData.append("title", review.title);
  formData.append("review", review.content);
  formData.append("star", review.star);
  return axios.post(`/review/${placeId}`, formData);
};

export const updateReview = (reviewId, placeId, review, reviewPic) => {
  const formData = new FormData();
  for (let item of reviewPic) {
    formData.append("review_pic", item);
  }
  formData.append("title", review.title);
  formData.append("review", review.content);
  formData.append("star", review.star);
  return axios.patch(`/review/${reviewId}/place/${placeId}`, formData);
};

export const deleteReview = (reviewId, placeId) => {
  return axios.delete(`/review/${reviewId}/place/${placeId}`);
};

export const createPlace = (placeForm, placePic) => {
  const formData = new FormData();
  formData.append("name", placeForm.name);
  formData.append("categoryId", placeForm.categoryId);
  formData.append("provinceId", placeForm.provinceId);
  formData.append("address", placeForm.address);
  formData.append("recommendRoute", placeForm.recommendRoute);
  formData.append("adultPrice", placeForm.adultPrice);
  formData.append("childPrice", placeForm.childPrice);
  formData.append("ratePrice", placeForm.ratePrice);
  formData.append("condition", placeForm.condition);
  formData.append("day", placeForm.day);
  formData.append("openClose", placeForm.openClose);
  formData.append("phoneNumber", placeForm.phoneNumber);
  formData.append("website", placeForm.website);
  formData.append("wifi", placeForm.wifi);
  formData.append("parking", placeForm.parking);
  formData.append("reserve", placeForm.reserve);
  formData.append("other", placeForm.other);
  for (let item of placePic) {
    formData.append("picture", item);
  }
  return axios.post("/place", formData);
};

export const updatePlace = (placeForm, placePic, placeId) => {
  const formData = new FormData();
  formData.append("name", placeForm.name);
  formData.append("categoryId", placeForm.categoryId);
  formData.append("provinceId", placeForm.provinceId);
  formData.append("address", placeForm.address);
  formData.append("recommendRoute", placeForm.recommendRoute);
  formData.append("adultPrice", placeForm.adultPrice);
  formData.append("childPrice", placeForm.childPrice);
  formData.append("ratePrice", placeForm.ratePrice);
  formData.append("condition", placeForm.condition);
  formData.append("day", placeForm.day);
  formData.append("openClose", placeForm.openClose);
  formData.append("phoneNumber", placeForm.phoneNumber);
  formData.append("website", placeForm.website);
  formData.append("wifi", placeForm.wifi);
  formData.append("parking", placeForm.parking);
  formData.append("reserve", placeForm.reserve);
  formData.append("other", placeForm.other);
  for (let item of placePic) {
    formData.append("picture", item);
  }
  return axios.patch(`/place/${placeId}`, formData);
};

export const deletePlace = (placeId) => {
  return axios.delete(`/place/${placeId}`);
};
