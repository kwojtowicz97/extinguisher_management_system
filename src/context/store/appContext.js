import React, { useReducer } from "react";
import {
  markersReducer,
  extinguishersReducer,
  hamburgerReducer,
  modalReducer,
} from "../reducers";

import { dummyExtinguishers } from "../../dummy";

export const appContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [modalState, modalDispatch] = useReducer(modalReducer, {
    isModal: false,
    modal: null,
  });
  const [hamburgerState, hamburgerDispatch] = useReducer(
    hamburgerReducer,
    false
  );
  const [markersState, markersDispatch] = useReducer(markersReducer, []);
  const [extinguishersState, extinguishersDispatch] = useReducer(
    extinguishersReducer,
    dummyExtinguishers
  );

  const value = {
    markersState,
    extinguishersState,
    hamburgerState,
    modalState,
    markersDispatch,
    extinguishersDispatch,
    hamburgerDispatch,
    modalDispatch,
  };

  return <appContext.Provider value={value}>{children}</appContext.Provider>;
};
