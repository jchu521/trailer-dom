import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk";

/**
 * Logs all actions and states after they are dispatched.
 */
const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.info("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  console.groupEnd();
  return result;
};

const middleware = applyMiddleware(thunk, logger);

let store = createStore(reducers, middleware);

export default store;
