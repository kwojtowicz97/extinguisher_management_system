import L from "leaflet";
import { normalIcon, dangerIcon, warningIcon } from "./icons";

const getIcon = (status) => {
  let icon = normalIcon;
  if (status === "warning") {
    icon = warningIcon;
  } else if (status === "danger") {
    icon = dangerIcon;
  }

  return new L.DivIcon({
    html: icon,
    bgPos: [16, 16],
    iconSize: [0, 0],
    iconAnchor: [16, 16],
    // popupAnchor?: PointExpression | undefined;
    className: "my-div-icon",
  });
};

export { getIcon };
