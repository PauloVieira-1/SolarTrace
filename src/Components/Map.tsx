import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { Map } from "leaflet";
import "leaflet/dist/leaflet.css";
import useScrollPosition from "./useScrollPosition";
import Hand from "../assets/hand-index-thumb (1).svg"
import Arrow from "../assets/arrow-right.svg"
import mapContent from "./MapContent";

const overlay = 
<>
<div
                style={{
                  position: "absolute",
                  top: "50px",
                  left: "50px",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  fontSize: "18px",
                  zIndex: 1000,
                  maxWidth: "300px"
                }}
      >
        <div>
          <h3 className="mb-4">Scroll Down</h3>
          <div className="text-center d-flex justify-content-center mb-4">
          <img src={Hand} className="img-fluid" style={{width: "50px", height: "50px"}}></img>
          </div>
          <p>Follow and observe our production process</p>
        </div>
      </div>
      <div
                style={{
                  position: "absolute",
                  top: "50px",
                  right: "50px",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  fontSize: "18px",
                  zIndex: 1000,
                  maxWidth: "300px"
                }}
      >
        <div>
          <img src={Arrow} className="img-fluid" style={{width: "100px", height: "100px", animation: "bounce 2s infinite alternate"}}></img>
          <style>
            {`
              @keyframes bounce {
                0% { transform: translateX(0); }
                100% { transform: translateX(20px); }
              }
            `}
          </style>
      </div>
      </div>
</>

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
  const [currentOveraly, setCurrentOverlay] = useState(overlay);

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
      setCurrentOverlay(mapContent[index].Content);
    }
  }, [scrollPosition, mapRef]);

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      {currentOveraly}
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={false}
        zoomControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup >TEST</Popup>
        </Marker>
        <MapConsumer />
      </MapContainer>
    </div>
  );
};

export default MapComponent;
