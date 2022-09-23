import axios from "../config/axios";

export const getAllPlace = (id) => {
  return axios.get(`/category?category=${id}`);
};

export const getAllPlaceByProvinceId = (id) => {
  return axios.get(`/province?province=${id}`);
};

export const getAllPlaceByProvinceIdCategoryId = (id, categoryId) => {
  return axios.get(`/category/province?category=${categoryId}&province=${id}`);
};
