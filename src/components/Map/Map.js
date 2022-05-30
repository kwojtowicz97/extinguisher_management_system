import { useMapEvent, MapContainer, ImageOverlay, Marker } from "react-leaflet";
import { LatLngBounds } from "leaflet";
import { useContext } from "react";
import { appContext } from "../../context/store/appContext";
import { addMarker } from "../../context/actions/markers";
import { endAddingPoint } from "../../context/actions/ui";

const bounds = new LatLngBounds([0, 0], [40.773941, -74.12544]);

const MapObject = () => {
  const { markersDispatch, modalState, modalDispatch, newPointState } = useContext(appContext);

  useMapEvent("click", (e) => {
    if (!modalState.isChooseLocation) return;
    markersDispatch(addMarker(e, newPointState));
    modalDispatch(endAddingPoint());
  });

  return null;
};

export const Map = () => {
  const { markersState } = useContext(appContext);
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
          <Marker position={[marker.lat, marker.lng]} />
        ))}
      </MapContainer>
    </div>
  );
};
