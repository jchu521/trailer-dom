import { FETCH_POPULAR_MOVIE } from "../../Types/fetchPopularMovie";

const initialState = {
	popularMovie: null,
};

export const popularMovieReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_POPULAR_MOVIE:
			return { ...state, ...payload };

		default:
			return state;
	}
};
