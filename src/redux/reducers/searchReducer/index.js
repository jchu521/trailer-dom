import { TOGGLE_SEARCH, SEARCH_RESULT } from "../../Types/searchTypes";

const initialState = {
  startedSearch: false,
};

const SearchReducer = (state = initialState, actions) => {
  const { type, payload } = actions;

  switch (type) {
    case TOGGLE_SEARCH:
      return { ...state, startedSearch: !state.startedSearch };

    case SEARCH_RESULT:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default SearchReducer;
