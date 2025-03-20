import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function Map() {
    const mapRef = useRef<L.Map | null>(null);

    useEffect(() => {
        if (mapRef.current) return;
        const map = L.map('map').setView([51.505, -0.09], 3.1);
        mapRef.current = map; 
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        const marker = L.marker([51.5, -0.09]).addTo(map);
        marker.bindPopup('TEST').openPopup();

        return () => {
            map.remove(); 
        };
    }, []);

    return <div id="map" style={{ height: '100vh' }} />;
}

export default Map;
