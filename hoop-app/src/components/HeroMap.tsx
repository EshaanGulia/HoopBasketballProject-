import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngTuple } from "leaflet"; // Import the required type

const HeroMap: React.FC = () => {
  // Explicitly type the coordinates as LatLngTuple
  const utdCenter: LatLngTuple = [32.9857, -96.7506];

  return (
    <div style={{ height: "500px", width: "100%", position: "relative" }}>
      {/* Use utdCenter as the center prop */}
      <MapContainer center={utdCenter} zoom={16} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
      </MapContainer>
      {/* Overlay text */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>Hoop at UTD</h1>
        <p style={{ fontSize: "1.2rem" }}>Find, create, and join basketball games around campus!</p>
      </div>
    </div>
  );
};

export default HeroMap;