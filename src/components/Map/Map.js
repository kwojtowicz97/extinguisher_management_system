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

const bounds = new LatLngBounds([0, 0], [40.773941, -74.12544]);

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
  return (
    <div className="map-container">
      <MapContainer center={[20.505, -40]} zoom={5} scrollWheelZoom={true}>
        <MapObject />
        <ImageOverlay
          url="http://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg"
          bounds={bounds}
          opacity={1}
          zIndex={100}
        />
        {markersState.map((marker) => (
          <Marker
            position={[marker.lat, marker.lng]}
            eventHandlers={{
              click: () => modalDispatch(showPointModal(marker)),
            }}
          ></Marker>
        ))}
      </MapContainer>
    </div>
  );
};
