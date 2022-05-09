import React, { useReducer } from "react";
import { markersReducer, extinguishersReducer, hamburgerReducer } from "../reducers";

export const appContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [hamburgerState, hamburgerDispatch] = useReducer(hamburgerReducer, false);
  const [markersState, markersDispatch] = useReducer(markersReducer, []);
  const [extinguishersState, extinguishersDispatch] = useReducer(
    extinguishersReducer,
    []
  );

  const value = {
    markersState,
    extinguishersState,
    hamburgerState,
    markersDispatch,
    extinguishersDispatch,
    hamburgerDispatch,
  };

  return <appContext.Provider value={value}>{children}</appContext.Provider>;
};
