import {
  ADD_NEW_POINT_MODAL,
  ADD_NEW_EXTINGUISHER_MODAL,
} from "../../context/reducers";
import { hideModal } from "../../context/actions/ui";

import { useContext } from "react";
import { appContext } from "../../context/store/appContext";

export const Modal = () => {
  const appCtx = useContext(appContext);
  const { modalState, modalDispatch } = appCtx;

  const setModalDiv = () => {
    switch (modalState.modal) {
      case ADD_NEW_POINT_MODAL:
        return (
          <>
            <div className="modal-header">Add New Point</div>
            <NewPointForm />
          </>
        );
      case ADD_NEW_EXTINGUISHER_MODAL:
        return (
          <>
            <div className="modal-header">Add New Extinguisher</div>
            <NewExtinguisherForm />
          </>
        );
    }
  };

  return (
    <>
      <div
        className="modal-backdrop"
        onClick={() => modalDispatch(hideModal())}
      ></div>
      <div className="modal">{setModalDiv()}</div>
    </>
  );
};

const NewPointForm = () => {
  return <div>New Point Form</div>;
};

const NewExtinguisherForm = () => {
  return <div>New Point Form</div>;
};

const Info = () => {
  return <div>Info</div>;
};
