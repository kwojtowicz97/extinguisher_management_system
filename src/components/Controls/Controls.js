import { useContext } from "react";
import { appContext } from "../../context/store/appContext";

const Controls = ({ children }) => {
  const { hamburgerState } = useContext(appContext);
  return (
    <div
      className={`controls-container ${hamburgerState ? "visible" : ""}`}
    >{children}</div>
  );
};

export default Controls
