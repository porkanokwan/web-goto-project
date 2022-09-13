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
