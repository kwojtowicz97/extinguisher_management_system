import { useContext } from "react";
import { appContext } from "../store/appContext";

export const Controls = ({ isHamburgerActive, children }) => {
  const { hamburgerState } = useContext(appContext);
  return (
    <div
      className={`controls-container ${hamburgerState ? "visible" : ""}`}
    >{children}</div>
  );
};
