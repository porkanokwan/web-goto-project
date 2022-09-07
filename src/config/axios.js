import axios from "axios";
import { getToken } from "../service/localStorage";
import { API_ENDPOINT } from "./env";

axios.defaults.baseURL = API_ENDPOINT;

axios.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    // config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default axios;
