import axios from "axios";

export const geocode = (address) => {
  const location = address;
  return axios.get("https://maps.googleapis.com/maps/api/geocode/json", {
    transformRequest: [
      function (data, headers) {
        delete headers["Authorization"];
        return data;
      },
    ],
    params: {
      address: location,
      key: process.env.REACT_APP_API_KEY_MAP,
    },
  });
};
