export const Controls = ({isHamburgerActive}) => {
  return (
    <div
      className={`controls-container ${isHamburgerActive ? "visible" : ""}`}
    ></div>
  );
};
