import { movieInstance, apiKey } from "../index";

//GET /movie/now_playing
export const getNowPlayingAPI = (page = 1) => {
  return movieInstance
    .get(`now_playing?api_key=${apiKey}&page=${page}&region=au`)
    .then((res) => {
      if (res.status === 200) {
        return res.data;
      }
    })
    .catch((err) => ({
      type: "MESSAGE",
      payload: {
        message: "FAILED TO GET NOW PLAYING MOVIES",
        reason: err,
      },
    }));
};
