import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import useScrollPosition from "./useScrollPosition";

type LatLngExpression = [number, number];

const position: LatLngExpression = [51.505, -0.09];

const useMapInstance = () => {
  const mapRef = useRef<any | null>(null);
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
    if (scrollPosition > 1000 && mapRef.current) {
      mapRef.current.panTo([51.515, -0.1]); 
    }
  }, [scrollPosition, mapRef]);

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "500px", width: "100%" }}
      scrollWheelZoom={false}
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
