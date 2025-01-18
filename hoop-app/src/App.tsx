import React from "react";
import NavBar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import UserProfile from "./components/UserProfile";
import MapSection from "./components/MapSection";

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <UserProfile />
      <MapSection />
    </>
  );
};

export default App;