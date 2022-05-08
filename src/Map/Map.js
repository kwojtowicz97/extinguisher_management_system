import { useMapEvent, MapContainer, ImageOverlay, Marker } from "react-leaflet";
import { LatLngBounds } from "leaflet";

const bounds = new LatLngBounds([0, 0], [40.773941, -74.12544]);

const MapObject = ({ onAddMarker }) => {
  const map = useMapEvent("click", (e) => {
    onAddMarker(e);
  });
  return null;
};

export const Map = ({ className, onAddMarker, markers }) => {
  return (
    <div className={className}>
      <MapContainer center={[20.505, -40]} zoom={5} scrollWheelZoom={true}>
        <MapObject onAddMarker={onAddMarker} />
        <ImageOverlay
          url="http://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg"
          bounds={bounds}
          opacity={1}
          zIndex={100}
        />
        {markers.map((marker) => (
          <Marker position={[marker.lat, marker.lng]} />
        ))}
      </MapContainer>
    </div>
  );
};
