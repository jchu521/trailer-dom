import { movieInstance } from "../index";

//GET /movie/now_playing
export const getNowPlayingAPI = (page = 1) => {
  return movieInstance
    .get(
      `now_playing?api_key=${process.env.MOVIEDB_API_KEY}&page=${page}&region=au`
    )
    .then((res) => {
      if (res.status === 200) {
        console.log(res);
        return res.data;
      }
    })
    .catch((err) => console.log(err));
};
