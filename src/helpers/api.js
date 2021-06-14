import axios from "axios";

export const getApiUrl = (path) => {
  return `https://gist.githubusercontent.com/Ispx/3b47ee1d8207ada24323d3c9d493d80f/raw/bde4c4b9290492e370cea7ee2462f4e2393db03b/movies.json${path}`;
};

export const apiGetNoCache = (path = "") => {
  const url = getApiUrl(path);
  const options = {
    cache: "no-store",
  };
  return axios.get(url, options);
};
