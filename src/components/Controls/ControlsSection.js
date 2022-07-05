export const ControlsSection = ({ title, children, button }) => {
  const { btnTitle, btnOnClick } = button || {};

  return (
    <div className="controls-section">
      <div className="section-title">
        <h1 className="title">{title}</h1>
        {button && <button onClick={btnOnClick}>{btnTitle}</button>}
      </div>
      <div className="content">{children}</div>
    </div>
  );
};
