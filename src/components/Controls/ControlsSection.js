export const ControlsSection = ({ title, children, button }) => {
  const { btnTitle, btnOnClick } = button || {};

  return (
    <div className="controls-section">
      <h1 className="title">{title}</h1>
      {button && <button onClick={btnOnClick}>{btnTitle}</button>}
      <div className="content">{children}</div>
    </div>
  );
};

