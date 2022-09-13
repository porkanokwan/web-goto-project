import axios from "../config/axios";

export const getAllPlace = () => {
  return axios.get("/");
};

export const getPlaceById = (placeId) => {
  return axios.get(`/place/${placeId}`);
};
