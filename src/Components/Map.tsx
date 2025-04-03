import { useEffect, useMemo, useRef, useState } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { Map } from "leaflet";
import "leaflet/dist/leaflet.css";
import useScrollPosition from "./useScrollPosition";
import mapContent from "./MapContent";
import ArrowLeft from "../assets/arrow-left-circle-fill.svg";
import ArrowRight from "../assets/arrow-right-circle-fill.svg";

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
  const [index, setIndex] = useState(0);
  const currentOverlay = useMemo(() => mapContent[index].Content, [index]);


  const positions = useMemo<(
    { coordinates: LatLngExpression; text: string }[]
  )>(
    () => [
      { coordinates: [51.89, 5.43], text: "Solarwatt Tiel Facility, Netherlands (Starting Position)" },
      { coordinates: [36.56, 101.43], text: "Raw Material Extraction - Qinghai, China" },
      { coordinates: [40.65, 109.84], text: "Ingot Manufacturing - Baotou, Inner Mongolia, China" },
      { coordinates: [32.06, 118.78], text: "Wafer Slicing - Jiangsu, China" },
      { coordinates: [30.57, 104.06], text: "Solar Cell Production - Sichuan, China" },
      { coordinates: [32.06, 118.78], text: "Module Assembly - Jiangsu, China" },
      { coordinates: [30.85, 121.75], text: "Transport (Yangshan Port, Shanghai, China)" },
      { coordinates: [43.3, 5.37], text: "Transport (Marseille Port, France)" },
    ],
    []
  );

  useEffect(() => {
    if (mapRef.current && scrollPosition >= 0 && scrollPosition < positions.length * 1000) {
      const index = Math.floor(scrollPosition / 1000);
      mapRef.current.panTo(positions[index].coordinates);
      setIndex(index);
    }
  }, [scrollPosition, mapRef, positions]);


  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      {currentOverlay}
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
          <img src={ArrowLeft} alt="Previous" style={{ width: "50px", height: "50px" }} />
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
          <img src={ArrowRight} alt="Next" style={{ width: "50px", height: "50px" }} />
        </button>
      </div>
      <MapContainer
        center={position}
        zoom={13}
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
