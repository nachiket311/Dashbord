import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";

const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const markers = [
  { position: [20.5937, 78.9629], name: "India" },
  { position: [37.0902, -95.7129], name: "USA" },
  { position: [61.5240, 105.3188], name: "Russia" },
];

const WorldMap = () => {
  return (
    <MapContainer
      center={[20.0, 0.0]}
      zoom={2}
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
  );
};

export default WorldMap;
