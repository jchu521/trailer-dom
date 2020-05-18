import { searchInstance, apiKey } from "../index";
import { SEARCH_RESULT } from "../../redux/Types/searchTypes";

export const search = ({ query, page = 1 }) => {
  return searchInstance
    .get(
      `multi?api_key=${apiKey}&language=en-US&query=${query}&page=${page}&include_adult=false`
    )
    .then((res) => {
      if (res.status === 200) {
        return {
          type: SEARCH_RESULT,
          payload: {
            result: res.data,
          },
        };
      }
    })
    .catch((err) => ({
      type: "MESSAGE",
      payload: {
        message: "FAILED TO SEARCH MOVIE",
        reason: err,
      },
    }));
};
