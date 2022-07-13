import React, { useReducer, useState } from "react";
import {
  markersReducer,
  extinguishersReducer,
  hamburgerReducer,
  modalReducer,
  newPointReducer
} from "../reducers";

import { dummyExtinguishers, dummyPoints } from "../../dummy";

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
  const [markersState, markersDispatch] = useReducer(markersReducer, dummyPoints);
  const [extinguishersState, extinguishersDispatch] = useReducer(
    extinguishersReducer,
    dummyExtinguishers
  );
  const [newPointState, newPointDispatch] = useReducer(newPointReducer, {
    agent: "Any",
    extinguisher: null,
  });

  const [refresh, setRefresh] = useState(false);

  const value = {
    markersState,
    extinguishersState,
    hamburgerState,
    modalState,
    newPointState,
    markersDispatch,
    extinguishersDispatch,
    hamburgerDispatch,
    modalDispatch,
    newPointDispatch,
    setRefresh,
  };

  

  return <appContext.Provider value={value}>{children}</appContext.Provider>;
};
