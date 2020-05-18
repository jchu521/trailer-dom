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

//GET /movie/{movieID}
export const getMovieDetailAPI = (movieId) => {
	return movieInstance
		.get(`${movieId}?api_key=${process.env.MOVIEDB_API_KEY}`)
		.then((res) => {
			if (res.status === 200) {
				return res.data;
			}
		})
		.catch((err) => console.log(err));
};

//GET /movie/{movieID}/credits
export const getMovieCreditAPI = (movieId) => {
	return movieInstance
		.get(`${movieId}/credits?api_key=${process.env.MOVIEDB_API_KEY}`)
		.then((res) => {
			if (res.status === 200) {
				return res.data;
			}
		})
		.catch((err) => console.log(err));
};

//GET /movie/popular
export const getPopularAPI = () => {
	return movieInstance
		.get(`/popular?api_key=${process.env.MOVIEDB_API_KEY}`)
		.then((res) => {
			if (res.status === 200) {
				return res.data;
			}
		})
		.catch((err) => console.log(err));
};
