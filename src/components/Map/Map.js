import {
  useMapEvent,
  MapContainer,
  ImageOverlay,
  Marker,
  Popup,
} from "react-leaflet";
import { LatLngBounds } from "leaflet";
import { useContext } from "react";
import { appContext } from "../../context/store/appContext";
import { addMarker } from "../../context/actions/markers";
import { endAddingPoint, showPointModal } from "../../context/actions/ui";
import { clearState } from "../../context/actions/newPoint";
import { setIsUsed } from "../../context/actions/extinguisher";
import { usePointsWitProblems } from "../../customHooks";
import { getIcon } from "./Icons/Icon";

const bounds = new LatLngBounds([0, 0], [113, -183]);

const MapObject = () => {
  const {
    markersDispatch,
    modalState,
    modalDispatch,
    newPointState,
    newPointDispatch,
    extinguishersDispatch,
  } = useContext(appContext);

  const { extinguisher } = newPointState;

  useMapEvent("click", (e) => {
    if (!modalState.isChooseLocation) return;
    markersDispatch(addMarker(e, newPointState));
    extinguishersDispatch(setIsUsed(extinguisher));
    modalDispatch(endAddingPoint());
    newPointDispatch(clearState());
  });

  return null;
};

export const Map = () => {
  const { markersState, modalDispatch } = useContext(appContext);

  const {
    pointsWithDangers: {
      pointsWithNoExtinguisher,
      pointsWithInspectionOverdue,
    },
    pointsWithWarnings: { pointsWithWrongAgents, pointsWithIncomingInspection },
  } = usePointsWitProblems();
  return (
    <div className="map-container">
      <MapContainer center={[70, -90]} zoom={3} scrollWheelZoom={true}>
        <MapObject />
        <ImageOverlay
          url="https://portal-media.cca.edu/images/1111_8th_St_Montgomery_Lv1__FA21_Campus_Map.width-1130.jpg"
          bounds={bounds}
          opacity={1}
          zIndex={100}
        />
        {markersState.map((marker) => {
          const isDanger =
            pointsWithNoExtinguisher.includes(marker) ||
            pointsWithInspectionOverdue.includes(marker);
          const isWarning =
            pointsWithIncomingInspection.includes(marker) ||
            pointsWithWrongAgents.includes(marker);
          let iconMarker = getIcon("normal");
          if (isWarning) {
            console.log("warning")
            iconMarker = getIcon("warning");
          }
          if (isDanger) iconMarker = getIcon("danger");
          return (
            <Marker
              key={marker.id}
              position={[marker.lat, marker.lng]}
              icon={iconMarker}
              eventHandlers={{
                click: () => modalDispatch(showPointModal(marker)),
              }}
            ></Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};
