const ControlsSection = ({ title, children, button }) => {
  const {btnTitle, btnOnClick} = button || {}

  return (
    <div className="controls-section">
      <h1 className="title">{title}</h1>
      {button && <button onClick={btnOnClick}>{btnTitle}</button>}
      <div className="content">{children}</div>
    </div>
  );
};

export const ControlsSectionWithPointsList = () => {
  return (
    <ControlsSection
      title={"Points"}
      button={{ btnTitle: "Add new Point", btnOnClick: null }}
    ></ControlsSection>
  );
};

export const ControlsSectionWithExtingushersList = () => {
  return (
    <ControlsSection
      title={"Extingushers"}
      button={{ btnTitle: "Add new Extinguisher", onClick: null }}
    ></ControlsSection>
  );
};

export const ControlsSectionWithWarningsList = () => {
  return <ControlsSection title={"Warnings"}></ControlsSection>;
};

export const ControlsSectionWithDangersList = () => {
  return <ControlsSection title={"Dangers"}></ControlsSection>;
};
