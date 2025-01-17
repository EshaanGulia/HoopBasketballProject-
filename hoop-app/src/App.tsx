import React from "react";
import Navbar from "./components/NavBar";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      {/* Main Content */}
      <div
        style={{
          minHeight: "calc(100vh - 64px)", // Fills the rest of the page below the navbar
          backgroundColor: "#f5f5f5", // Light gray background
          padding: "20px", // Padding for spacing
        }}
      >
        <h1 style={{ textAlign: "center", margin: "20px 0" }}>Welcome to Hoop</h1>
        <p style={{ textAlign: "center", fontSize: "18px", lineHeight: "1.6" }}>
          Your basketball app for creating and joining games at UTD!
        </p>
      </div>
    </>
  );
};

export default App;