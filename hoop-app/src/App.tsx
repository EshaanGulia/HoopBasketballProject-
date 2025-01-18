import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import MapSection from "./components/MapSection";
import SessionSection from "./components/SessionsSection";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          paddingTop: "64px", // Matches the navbar height to prevent overlap
        }}
      >
        <div id="hero-section">
          <HeroSection />
        </div>
        <div id="map-section">
          <MapSection />
        </div>
        <div id="session-section">
          <SessionSection />
        </div>
      </div>
    </>
  );
};

export default App;