import axios from "axios";

export const getApiUrl = (path) => {
  return process.env.REACT_APP_API;
};

export const apiGetNoCache = (path = "") => {
  const url = getApiUrl(path);
  const options = {
    cache: "no-store",
  };
  return axios.get(url, options);
};
