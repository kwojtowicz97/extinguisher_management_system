import { useState } from "react";
import { useWarningsAndDangers } from "../../customHooks";

export const ControlsSection = ({
  title,
  children,
  button,
  collapsable,
  badge,
}) => {
  const { btnTitle, btnOnClick } = button || {};
  const [isCollapsed, setIsCollapsed] = useState(true);
  const {
    dangers: { extinguishersInspectionOverdue, pointsWithNoExtinguisher },
    warnings: { extinguishersToInspect, pointsWithWrongAgents },
  } = useWarningsAndDangers();

  const dangersBadge =
    extinguishersInspectionOverdue.length + pointsWithNoExtinguisher.length;

  const warningsBadge = extinguishersToInspect.length + pointsWithWrongAgents.length

  const collapseHandler = () => {
    setIsCollapsed((state) => !state);
  };

  return (
    <div
      className={`controls-section ${isCollapsed && collapsable && "margin"}`}
    >
      <div className="section-title">
        <h1 className="title">{title}</h1>
        {badge && (
          <div className={`badge ${title === "Dangers" ? "red" : "yellow"}`}>
            {title === "Dangers" ? dangersBadge : warningsBadge}
          </div>
        )}
        {button && <button onClick={btnOnClick}>{btnTitle}</button>}
        {collapsable && (
          <button onClick={collapseHandler} className="expander">
            {isCollapsed ? "Expand" : "Collapse"}
          </button>
        )}
      </div>
      <div className={`content ${isCollapsed && collapsable && "collapsed"}`}>
        {children}
      </div>
    </div>
  );
};
