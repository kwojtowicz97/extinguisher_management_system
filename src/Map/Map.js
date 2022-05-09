import { useMapEvent, MapContainer, ImageOverlay, Marker } from "react-leaflet";
import { LatLngBounds } from "leaflet";
import { useContext } from "react";
import { appContext } from "../store/appContext";
import { addMarker } from "../actions/markers";

const bounds = new LatLngBounds([0, 0], [40.773941, -74.12544]);

const MapObject = () => {
  const { markersDispatch } = useContext(appContext);

  useMapEvent("click", (e) => {
    markersDispatch(addMarker(e));
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
