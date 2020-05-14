import axios from "axios";

const url = "https://api.themoviedb.org";
const version = 3;

const movieInstance = axios.create({
  baseURL: `${url}/${version}/movie/`,
  timeout: 30000,
});

const tvInstance = axios.create({
  baseURL: `${url}/${version}/tv/`,
  timeout: 30000,
});

export { movieInstance, tvInstance };
