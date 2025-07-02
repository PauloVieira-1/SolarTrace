import { useEffect, useMemo, useRef, useState } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { Map } from "leaflet";
import "leaflet/dist/leaflet.css";
import useScrollPosition from "./useScrollPosition";
import mapContent from "./MapContent";
import ArrowLeft from "../assets/arrow-left-circle-fill.svg";
import ArrowRight from "../assets/arrow-right-circle-fill.svg";
import Button from "react-bootstrap/Button";

type LatLngExpression = [number, number];

const position: LatLngExpression = [51.89, 5.43];

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

  const [currentScrollPosition, setCurrentScrollPosition] = useState(0);
  const [previousScrollPosition, setPreviousScrollPosition] = useState(0);

  const { mapRef, MapConsumer } = useMapInstance();
  const [index, setIndex] = useState(0);
  const [showContent, setShowContent] = useState(true); // NEW STATE

  const currentOverlay = useMemo(() => mapContent[index].Content, [index]);

  const positions = useMemo<{ coordinates: LatLngExpression; text: string }[]>(
    () => [
      { coordinates: [51.89, 5.43], text: "Solarwatt Tiel Facility, Netherlands (Starting Position)" },
      { coordinates: [36.56, 101.43], text: "Raw Material Extraction - Qinghai, China" },
      { coordinates: [22.279004721622382, 113.55879733278165], text: "Ingot Manufacturing - Guangdong, China" },
      { coordinates: [32.06, 118.78], text: "Wafer Slicing - Jiangsu, China" },
      { coordinates: [30.57, 104.06], text: "Solar Cell Production - Sichuan, China" },
      { coordinates: [32.06, 118.78], text: "Module Assembly - Jiangsu, China" },
      { coordinates: [30.85, 121.75], text: "Transport (Yangshan Port, Shanghai, China)" },
      { coordinates: [51.89, 4.28], text: "Transport to Europe (Rotterdam Port, Netherlands)" },
    ],
    []
  );

  useEffect(() => {
    if (mapRef.current && scrollPosition >= 1900 && scrollPosition < positions.length * 1000) {
      if (scrollPosition > previousScrollPosition) {
        setCurrentScrollPosition(scrollPosition);
        const index = Math.min(Math.floor(scrollPosition / 1000), positions.length - 1);
        setIndex(index);
        mapRef.current.panTo(positions[index].coordinates);
      }
      setPreviousScrollPosition(scrollPosition);
    }
  }, [scrollPosition, mapRef, positions, previousScrollPosition, currentScrollPosition]);

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <Button
        onClick={() => setShowContent((prev) => !prev)}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          zIndex: 1100,
          padding: "10px 15px",
          border: "1px solid #ccc",
          borderRadius: "23px",
          backgroundColor: "#E5704D",
          cursor: "pointer",

        }}
      >
        {showContent ? "Hide Info" : "Show Info"}
      </Button>

      {showContent && currentOverlay}

      <div
        style={{
          position: "absolute",
          bottom: "50px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "20px",
          zIndex: 1000,
        }}
      >
        <button
          onClick={() => {
            const newIndex = index - 1;
            if (newIndex >= 0) {
              mapRef.current?.panTo(positions[newIndex].coordinates);
              setIndex(newIndex);
            }
          }}
          style={{ background: "transparent", border: "none" }}
        >
          <img src={ArrowLeft} alt="Previous" style={{ width: "50px", height: "50px" }} className="hover-effect-s" />
        </button>
        <button
          onClick={() => {
            const newIndex = index + 1;
            if (newIndex < positions.length) {
              mapRef.current?.panTo(positions[newIndex].coordinates);
              setIndex(newIndex);
            }
          }}
          style={{ background: "transparent", border: "none" }}
        >
          <img src={ArrowRight} alt="Next" style={{ width: "50px", height: "50px" }} className="hover-effect-s" />
        </button>
      </div>

      {/* Map */}
      <MapContainer
        center={position}
        zoom={9}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={false}
        zoomControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {positions.map((pos, index) => (
          <Marker key={index} position={pos.coordinates}>
            <Popup>{pos.text}</Popup>
          </Marker>
        ))}
        <MapConsumer />
      </MapContainer>
    </div>
  );
};

export default MapComponent;
