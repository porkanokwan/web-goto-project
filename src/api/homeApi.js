import axios from "../config/axios";

export const getAllPlace = (id) => {
  return axios.get(`/category?category=${id}`);
};
