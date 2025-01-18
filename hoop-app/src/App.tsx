import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import MapSection from "./components/MapSection";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MapSection />
    </>
  );
};

export default App;