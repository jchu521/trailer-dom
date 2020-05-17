import axios from "axios";

const url = "https://api.themoviedb.org";
const version = 3;
const apiKey = process.env.MOVIEDB_API_KEY;

const movieInstance = axios.create({
  baseURL: `${url}/${version}/movie/`,
  timeout: 30000,
});

const tvInstance = axios.create({
  baseURL: `${url}/${version}/tv/`,
  timeout: 30000,
});

const searchInstance = axios.create({
  baseURL: `${url}/${version}/search/`,
  timeout: 30000,
});

export { movieInstance, tvInstance, searchInstance, apiKey };
