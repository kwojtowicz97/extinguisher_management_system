import { useState } from "react";

export const ControlsSection = ({ title, children, button, collapsable }) => {
  const { btnTitle, btnOnClick } = button || {};
  const [isCollapsed, setIsCollapsed] = useState(true);

  const collapseHandler = () => {
    setIsCollapsed(state => !state)
  }

  return (
    <div
      className={`controls-section ${isCollapsed && collapsable && "margin"}`}
    >
      <div className="section-title">
        <h1 className="title">{title}</h1>
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
