import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup} from "react-leaflet";
import { Map } from "leaflet";
import  "leaflet/dist/leaflet.css";
import useScrollPosition from "./useScrollPosition";

type LatLngExpression = [number, number];

const position: LatLngExpression = [51.505, -0.09];

const useMapInstance = () => {
  const mapRef = useRef<Map>(null);
  const MapConsumer = () => {
    const map = useMap();
    mapRef.current = map;
    return null; 
  };
  return { mapRef, MapConsumer };
};

const MapComponent = () => {
  const scrollPosition: number = useScrollPosition();
  const { mapRef, MapConsumer } = useMapInstance();

  useEffect(() => {
    const positions: Array<LatLngExpression> = [
      [51.505, -0.09],
      [52.505, -0.09],
      [53.505, -0.09],
      [54.505, -0.09],
      [55.505, -0.09],
    ];

    if (mapRef.current && scrollPosition >= 0 && scrollPosition < positions.length * 1000) {
      const index = Math.floor(scrollPosition / 1000);
      mapRef.current.panTo(positions[index]);
    }

  }, [scrollPosition, mapRef]);

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "100vh", width: "100%" }}
      scrollWheelZoom={false}
      zoomControl={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>TEST</Popup>
      </Marker>
      <MapConsumer />
    </MapContainer>
  );
};

export default MapComponent;
