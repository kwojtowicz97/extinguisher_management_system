import {
  ADD_NEW_POINT_MODAL,
  ADD_NEW_EXTINGUISHER_MODAL,
  INFO_MODAL,
} from "../../context/reducers";
import { hideModal } from "../../context/actions/ui";

import { useContext } from "react";
import { appContext } from "../../context/store/appContext";

export const Modal = () => {
  const appCtx = useContext(appContext);
  const { modalState, modalDispatch } = appCtx;
  const { modal, info } = modalState;

  const setModalDiv = () => {
    switch (modal) {
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
      case INFO_MODAL:
        return (
          <>
            <div className="modal-header">Warning</div>
            <Info info={info} />
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

const Info = ({ info }) => {
  return <div>{info}</div>;
};
