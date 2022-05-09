import {useState} from "react"

const useMarker = () => {
  const [markers, setMarkers] = useState([]);
  const addMarkerHandler = (e) => {
    console.log(e);
    setMarkers((prev) => [...prev, { lat: e.latlng.lat, lng: e.latlng.lng }]);
  };

  return [markers, addMarkerHandler]
}

export default useMarker

