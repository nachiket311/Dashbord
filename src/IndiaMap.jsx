// IndiaMap.jsx
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Default Leaflet Marker Icon Fix
const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const markers = [
  { name: "Gujarat", position: [22.2587, 71.1924] },
  { name: "Karnataka", position: [15.3173, 75.7139] },
  { name: "Haryana", position: [29.0588, 76.0856] },
];

const IndiaMap = () => {
  return (
    <div className="w-full h-full">
      <MapContainer
        center={[22.5937, 78.9629]} // Center of India
        zoom={5.2}
        scrollWheelZoom={false}
        className="w-full h-full rounded"
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.position} icon={customIcon}>
            <Popup>{marker.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default IndiaMap;
