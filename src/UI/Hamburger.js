import { useContext } from "react";
import { appContext } from "../store/appContext";
import { toggleHamburer } from "../actions/ui";

export const Hamburger = ({ className }) => {
  const { hamburgerDispatch } = useContext(appContext);

  const onClick = () => {
      hamburgerDispatch(toggleHamburer());
  }

  return (
    <button onClick={onClick} id="hamburger" className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        className="bi bi-list"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
        />
      </svg>
    </button>
  );
};
