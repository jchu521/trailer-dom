import React, { useRef, createContext } from "react";
import debounce from "lodash/debounce";

export const StateContext = createContext();

export default function State({ children }) {
  const delayedQuery = useRef(debounce((q, sendQuery) => sendQuery(q), 500))
    .current;

  const value = {
    delayedQuery,
  };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
}
